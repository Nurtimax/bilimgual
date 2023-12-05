import { CircularProgress, Typography, alpha, styled } from '@mui/material';
import React, { FC, useCallback, useState } from 'react';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import { useDropzone } from 'react-dropzone';

import { useAppSelector } from '../../../store/hooks';
import { emailRegex } from '../../@admin/team/validate';
import { storage } from '../../../firebase';
import LoginAlert from '../../UI/login/Alert';
import { authSelector } from '../../../store/helpers/auth';
import { IVideoCardProps } from '../../../store/slices/usefull';

interface IUploadVideoProps extends Pick<IVideoCardProps, 'id' | 'video'> {
   handleChangeVideo: (id: string, value: string) => void;
}

const RootStyle = styled('div')(({ theme }) => ({
   width: 144,
   height: 144,
   margin: 'auto',
   borderRadius: '50%',
   padding: theme.spacing(1),
   border: `1px dashed ${alpha('#919EAB', 0.32)}`
}));

const DropZoneStyle = styled('div')({
   zIndex: 0,
   width: '100%',
   height: '100%',
   outline: 'none',
   display: 'flex',
   overflow: 'hidden',
   borderRadius: '50%',
   position: 'relative',
   alignItems: 'center',
   justifyContent: 'center',
   '& > *': { width: '100%', height: '100%' },
   '&:hover': {
      cursor: 'pointer',
      '& .placeholder': {
         zIndex: 9
      }
   }
});

const PlaceholderStyle = styled('div')(({ theme }) => ({
   display: 'flex',
   position: 'absolute',
   alignItems: 'center',
   flexDirection: 'column',
   justifyContent: 'center',
   color: theme.palette.text.secondary,
   backgroundColor: alpha('#919EAB', 0.16),
   transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
   }),
   '&:hover': { opacity: 0.72 }
}));

const UploadVideo: FC<IUploadVideoProps> = ({ id, video, handleChangeVideo }) => {
   const [progress, setProgress] = useState<number>(0);

   const { fields } = useAppSelector(authSelector);

   const emailMathes = emailRegex.test(fields.email || '');

   const handleDropUserImage = useCallback(
      (acceptedFiles: File[]) => {
         const file = acceptedFiles[0];

         const storageRef = ref(storage, `usefull/${fields.email}/${file.name}`);

         const uploadTask = uploadBytesResumable(storageRef, file);

         uploadTask.on(
            'state_changed',
            (snapshot) => {
               const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               setProgress(progress);
            },
            (error) => {
               toast.error(error.message);
            },
            () => {
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  handleChangeVideo(id, downloadURL);
               });
            }
         );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [id]
   );

   const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
      multiple: false,
      onDrop: handleDropUserImage
   });

   const error = false;

   return (
      <>
         <RootStyle
            sx={{
               ...((isDragReject || error) && {
                  borderColor: 'error.light'
               }),
               position: 'relative'
            }}
         >
            <DropZoneStyle
               {...getRootProps()}
               sx={{
                  ...(isDragActive && { opacity: 0.72 })
               }}
            >
               <input disabled={!emailMathes} {...getInputProps()} />

               <PlaceholderStyle
                  className="placeholder"
                  sx={{
                     ...((isDragReject || error) && {
                        bgcolor: 'error.lighter'
                     })
                  }}
               >
                  <VideoCallIcon sx={{ width: 24, height: 24, mb: 1 }} color="primary" />
                  <Typography variant="caption">{video ? 'Update Video' : 'Upload Video'}</Typography>
               </PlaceholderStyle>
            </DropZoneStyle>
            {progress !== 0 && progress !== 100 && (
               <CircularProgress
                  variant="determinate"
                  sx={{
                     position: 'absolute',
                     left: -5,
                     top: -5,
                     zIndex: 2,
                     width: '152px !important',
                     height: '152px !important',
                     '& svg': {
                        width: 'inherit !important',
                        height: 'inherit !important'
                     }
                  }}
                  size="1px"
                  value={progress}
               />
            )}
         </RootStyle>

         {fileRejections.length > 0 && <LoginAlert />}
      </>
   );
};

export default UploadVideo;

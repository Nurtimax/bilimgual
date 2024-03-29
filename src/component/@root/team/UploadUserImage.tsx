import { CircularProgress, Typography, alpha, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDropzone } from 'react-dropzone';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';

import LoginAlert from '../../UI/login/Alert';
import { storage } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import Card from '../../UI/card';
import { actionOurTeam, selectorOurTeam } from '../../../store/slices/our-team';

import { emailRegex } from './validate';

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

const UploadUserImage = () => {
   const [progress, setProgress] = useState<number>(0);

   const dispatch = useAppDispatch();

   const { team } = useAppSelector(selectorOurTeam);

   const file = team.staticImage;

   const emailMathes = emailRegex.test(team.email);

   const handleDropUserImage = useCallback(
      (acceptedFiles: File[]) => {
         const file = acceptedFiles[0];

         const storageRef = ref(storage, `team/${team.email}/${file.name}`);

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
                  dispatch(
                     actionOurTeam.changeValueWithKey({
                        key: 'staticImage',
                        value: downloadURL
                     })
                  );
               });
            }
         );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
   );

   const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
      multiple: false,
      accept: { 'image/*': [] },
      onDrop: handleDropUserImage
   });

   const error = false;

   return (
      <>
         <Card
            headerProps={{
               children: !emailMathes && <LoginAlert errorName="Email " message="Please enter a valid email address." />
            }}
            contentProps={{
               children: (
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

                           {file && <img alt="" src={typeof file === 'string' ? file : ''} />}

                           <PlaceholderStyle
                              className="placeholder"
                              sx={{
                                 ...(file && {
                                    opacity: 0,
                                    color: 'common.white',
                                    bgcolor: 'grey.900',
                                    '&:hover': { opacity: 0.72 }
                                 }),
                                 ...((isDragReject || error) && {
                                    bgcolor: 'error.lighter'
                                 })
                              }}
                           >
                              <AddAPhotoIcon sx={{ width: 24, height: 24, mb: 1 }} color="primary" />
                              <Typography variant="caption">{file ? 'Update Avatar' : 'Upload Avatar'}</Typography>
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
               )
            }}
         />
      </>
   );
};

export default UploadUserImage;

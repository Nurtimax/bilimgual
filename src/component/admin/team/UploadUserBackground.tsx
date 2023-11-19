import { CardContent, LinearProgress, Typography, alpha, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import WallpaperIcon from '@mui/icons-material/Wallpaper';

import { storage } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import LoginAlert from '../../UI/login/Alert';
import { actionOurTeam, selectorOurTeam } from '../../../store/slices/our-team';

import { emailRegex } from './validate';

const Placeholder = styled('div')`
   background-color: ${alpha('#919EAB', 0.16)};
   height: 200px;
   display: grid;
   place-items: center;
   border-radius: 8px;
   border: 1px dashed;

   &:hover {
      opacity: 0.72;
   }
`;

const DropZoneStyle = styled('div')({
   zIndex: 0,
   width: '100%',
   height: '100%',
   outline: 'none',
   display: 'flex',
   overflow: 'hidden',
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

const UploadUserBackground = () => {
   const [progress, setProgress] = useState<number>(0);

   const dispatch = useAppDispatch();

   const { team } = useAppSelector(selectorOurTeam);

   const file = team.profileBackground;

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
                        key: 'profileBackground',
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

   return (
      <>
         {!emailMathes && (
            <CardContent>
               <LoginAlert errorName="Email " message="Please enter a valid email address." />
            </CardContent>
         )}
         <CardContent>
            <Placeholder
               sx={{
                  ...(isDragReject && {
                     borderColor: 'error.light'
                  })
               }}
            >
               <DropZoneStyle {...getRootProps()}>
                  <input disabled={!emailMathes} {...getInputProps()} />

                  {file && <img alt="" src={typeof file === 'string' ? file : ''} />}

                  <div
                     style={{
                        placeItems: 'center',
                        display: file ? 'none' : 'grid',
                        ...(isDragActive && { opacity: 0.72 })
                     }}
                  >
                     <WallpaperIcon sx={{ width: 24, height: 24, mb: 1 }} color="primary" />
                     <Typography variant="caption">
                        {file ? 'Update Background image' : 'Upload Background image'}
                     </Typography>
                  </div>
               </DropZoneStyle>
            </Placeholder>

            {fileRejections.length > 0 && <LoginAlert />}
         </CardContent>
         <CardContent>
            {progress !== 0 && progress !== 100 && (
               <LinearProgress variant="buffer" value={progress} valueBuffer={progress + 10} />
            )}
         </CardContent>
      </>
   );
};

export default UploadUserBackground;

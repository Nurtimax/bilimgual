import { Card, CardContent, CircularProgress, Switch, Typography, styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useDropzone } from 'react-dropzone';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';

import LoginAlert from '../../UI/login/Alert';
import { storage } from '../../../firebase';

const RootStyle = styled('div')(({ theme }) => ({
   width: 144,
   height: 144,
   margin: 'auto',
   borderRadius: '50%',
   padding: theme.spacing(1)
}));

const DropZoneStyle = styled('div')({
   zIndex: 2,
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
   transition: theme.transitions.create('opacity', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
   }),
   opacity: 0.72
}));

const UploadUserImage = () => {
   const [file, setFile] = useState<string | null>(null);
   const [progress, setProgress] = useState<number>(0);

   const handleDropUserImage = useCallback((acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const storageRef = ref(storage, `team/${file.name}`);

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
               setFile(downloadURL);
            });
         }
      );
   }, []);

   const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
      multiple: false,
      accept: { 'image/*': [] },
      onDrop: handleDropUserImage
   });

   const error = false;

   return (
      <Card>
         <CardContent sx={{ height: 300, display: 'grid', placeItems: 'center' }}>
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
                  <input {...getInputProps()} />

                  {file && <img alt="" src={typeof file === 'string' ? file : ''} />}

                  <PlaceholderStyle
                     className="placeholder"
                     sx={{
                        ...(file
                           ? {}
                           : {
                                '&:hover': { opacity: 0.72 }
                             }),
                        ...((isDragReject || error) && {
                           bgcolor: 'error.lighter'
                        })
                     }}
                  >
                     <AddAPhotoIcon sx={{ width: 24, height: 24, mb: 1 }} color="primary" />
                     <Typography variant="caption">{file ? 'Update photo' : 'Upload photo'}</Typography>
                  </PlaceholderStyle>
               </DropZoneStyle>
               <CircularProgress
                  variant="determinate"
                  sx={{
                     position: 'absolute',
                     left: -5,
                     top: -5,
                     zIndex: 1,
                     width: '154px !important',
                     height: '154px !important'
                  }}
                  size="1px"
                  value={progress}
               />
            </RootStyle>

            {fileRejections.length > 0 && <LoginAlert />}
         </CardContent>
         <CardContent sx={{ display: 'flex', placeItems: 'center' }}>
            <div>
               <Typography variant="h6">Email verified</Typography>
               <Typography variant="subtitle2">
                  Disabling this will automatically send the user a verification email
               </Typography>
            </div>
            <Switch id="ios" />
         </CardContent>
      </Card>
   );
};

export default UploadUserImage;

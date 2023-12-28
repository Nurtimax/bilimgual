import { Stack, TextField, alpha, styled } from '@mui/material';
import React, { FC, memo, useCallback, useState } from 'react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useDropzone } from 'react-dropzone';

import Image from '../../UI/Image';
import { useAppSelector } from '../../../store/hooks';
import { emailRegex } from '../../@root/team/validate';
import { storage } from '../../../firebase';
import { authSelector } from '../../../store/helpers/auth';
import LoginAlert from '../../UI/login/Alert';

interface IAdminDescriptionImageProps {
   img: string;
}

const RootStyle = styled('div')(({ theme }) => ({
   width: '100%',
   height: '100%',
   margin: 'auto',
   padding: theme.spacing(1),
   border: `1px dashed ${alpha('#919EAB', 0.32)}`,
   borderRadius: theme.spacing(1)
}));

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

const AdminDescriptionImage: FC<IAdminDescriptionImageProps> = memo(({ img }) => {
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
               getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {});
            }
         );
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   );
   const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
      multiple: false,
      onDrop: handleDropUserImage
   });
   return (
      <Stack direction="row" display="grid" gridTemplateColumns="1fr 2fr" gap={1}>
         <Image alt="" src={img} style={{ width: '100%', aspectRatio: '1.5/1', height: 'inherit', borderRadius: 5 }} />
         <RootStyle
            sx={{
               ...(isDragReject && {
                  borderColor: 'error.light'
               }),
               position: 'relative'
            }}
            {...getRootProps()}
         >
            <DropZoneStyle
               sx={{
                  ...(isDragActive && { opacity: 0.72 })
               }}
            >
               <input disabled={!emailMathes} {...getInputProps()} />
               <AddPhotoAlternateIcon sx={{ color: '#919EAB', width: '3vw', height: '3vw' }} />
            </DropZoneStyle>

            {fileRejections.length > 0 && <LoginAlert />}
         </RootStyle>
         <TextField id="outlined-multiline-static" label="Multiline" multiline rows={13} defaultValue="Default Value" />
      </Stack>
   );
});

export default AdminDescriptionImage;

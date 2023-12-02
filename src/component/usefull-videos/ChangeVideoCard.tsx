import { Box, Button, Card, CardActions, CardContent, Input, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import { Player } from 'video-react';
import DeleteIcon from '@mui/icons-material/Delete';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import SaveIcon from '@mui/icons-material/Save';
import { FormikErrors } from 'formik';

import { IVideoCardProps, deleteUsefullVideoCardByIdThunk } from '../../store/slices/usefull';
import LoginAlert from '../UI/login/Alert';
import { useAppDispatch } from '../../store/hooks';

import UploadVideo from './UploadVideo';

interface IChangeVideoCardProps extends IVideoCardProps {
   errors: (FormikErrors<IVideoCardProps> | undefined)[];
   index: number;
   handleChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
   handleChangeVideo: (id: number, value: string) => void;
}

const ChangeVideoCard: FC<IChangeVideoCardProps> = ({
   duration,
   title,
   video,
   id,
   errors,
   index,
   handleChange,
   handleChangeVideo
}) => {
   const [edit, setEdit] = useState(false);
   const findError = (Array.isArray(errors) ? errors : [])?.find((_, i) => i === index);

   const dispatch = useAppDispatch();

   const handleDelete = () => {
      dispatch(deleteUsefullVideoCardByIdThunk(id));
   };

   return (
      <Card sx={{ height: '100%', width: '100%' }}>
         {findError && (
            <CardContent>
               <LoginAlert errorName={findError.title} message={findError.video} />
            </CardContent>
         )}

         <Box sx={{ height: 266, display: 'grid', placeItems: 'center' }}>
            {edit && video ? (
               <Player playsInline poster="/assets/images/placeholder.png" src={video} />
            ) : (
               <UploadVideo id={id} video={video} handleChangeVideo={handleChangeVideo} />
            )}
         </Box>

         <CardContent>
            <Typography gutterBottom variant="body3" component="div">
               <Input
                  placeholder="Enter your title"
                  value={title}
                  name="title"
                  onChange={handleChange}
                  id={String(id)}
               />
            </Typography>
            <Typography variant="bodySmall" color="text.secondary">
               Duration {duration}
            </Typography>
         </CardContent>

         <CardActions sx={{ justifyContent: 'space-between' }}>
            <Button variant="come" endIcon={<VideoSettingsIcon />} onClick={() => setEdit((prev) => !prev)}>
               Edit video
            </Button>

            <Button variant="contained" color="success" endIcon={<SaveIcon />}>
               save
            </Button>

            <Button onClick={handleDelete} variant="contained" color="error" endIcon={<DeleteIcon />}>
               card
            </Button>
         </CardActions>
      </Card>
   );
};

export default ChangeVideoCard;

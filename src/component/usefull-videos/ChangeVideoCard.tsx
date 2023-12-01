import { Box, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Player } from 'video-react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export interface IVideoCardProps {
   video: string;
   title: string;
   duration: number;
   id: number;
}

const ChangeVideoCard: FC<IVideoCardProps> = ({ duration, title, video, id }) => {
   return (
      <Card sx={{ height: '100%', width: '100%' }}>
         <Box sx={{ height: 266 }}>
            {video ? <Player playsInline poster="/assets/images/placeholder.png" src={video} /> : <input />}
         </Box>

         <CardContent>
            <Typography gutterBottom variant="body3" component="div">
               {id} {title}
            </Typography>
            <Typography variant="bodySmall" color="text.secondary">
               Duration {duration}
            </Typography>
         </CardContent>

         <CardActions>
            <IconButton color="info">
               <EditIcon />
            </IconButton>

            <IconButton color="error">
               <DeleteIcon />
            </IconButton>
         </CardActions>
      </Card>
   );
};

export default ChangeVideoCard;

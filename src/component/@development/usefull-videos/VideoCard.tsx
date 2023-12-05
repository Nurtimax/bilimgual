import { Card, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Player } from 'video-react';

import { IVideoCardProps } from '../../../store/slices/usefull';

const VideoCard: FC<IVideoCardProps> = ({ duration, title, video, isSaved }) => {
   if (!isSaved) {
      return null;
   }

   return (
      <Card sx={{ height: '100%', width: '100%' }}>
         <Player playsInline poster="/assets/images/placeholder.png" src={video} />
         <CardContent>
            <Typography gutterBottom variant="body3" component="div">
               {title}
            </Typography>
            <Typography variant="bodySmall" color="text.secondary">
               Duration {duration}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default VideoCard;

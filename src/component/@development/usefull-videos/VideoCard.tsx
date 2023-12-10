import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { Player } from 'video-react';

import { IVideoCardProps } from '../../../store/slices/usefull';
import Card from '../../UI/card';

const VideoCard: FC<IVideoCardProps> = ({ duration, title, video, isSaved }) => {
   if (!isSaved) {
      return null;
   }

   return (
      <Card
         cardProps={{ sx: { height: '100%', width: '100%' } }}
         headerProps={{ children: <Player playsInline poster="/assets/images/placeholder.png" src={video} /> }}
         contentProps={{
            children: (
               <>
                  <Typography gutterBottom variant="body3" component="div">
                     {title}
                  </Typography>
                  <Typography variant="bodySmall" color="text.secondary">
                     Duration {duration}
                  </Typography>
               </>
            )
         }}
      />
   );
};

export default VideoCard;

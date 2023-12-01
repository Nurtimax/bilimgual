import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Player } from 'video-react';

const VideoCard = () => {
   return (
      <Card sx={{ height: '100%', width: '100%' }}>
         <Player playsInline poster="/assets/images/placeholder.png" src="/static/images/Adil_Gitaram.mp4" />
         <CardContent>
            <Typography gutterBottom variant="body3" component="div">
               Test Overview
            </Typography>
            <Typography variant="bodySmall" color="text.secondary">
               Duration 5:00
            </Typography>
         </CardContent>
      </Card>
   );
};

export default VideoCard;

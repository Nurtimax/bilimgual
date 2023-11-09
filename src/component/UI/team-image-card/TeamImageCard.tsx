import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ITeamImageCard } from '../../../types/team';

const TeamImageCard: FC<ITeamImageCard> = ({ borderRadius, figCaption, name, staticImage, socials }) => {
   return (
      <Card elevation={2} sx={{ width: '100%', display: 'grid', placeItems: 'center' }}>
         <CardMedia
            component="img"
            height="350"
            sx={{ borderRadius, objectFit: 'fill', width: '100%' }}
            image={staticImage}
            alt="Paella dish"
         />
         <CardContent>
            <Typography textAlign="center" variant="h6">
               {name}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {figCaption}
            </Typography>
         </CardContent>
         <CardContent>
            {socials.map((social) => (
               <IconButton href={social.link} key={social.id}>
                  {social.icon}
               </IconButton>
            ))}
         </CardContent>
      </Card>
   );
};

export default TeamImageCard;

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ITeamImageCard } from '../../../types/team';

const TeamImageCard: FC<ITeamImageCard> = ({ borderRadius, figCaption, name, staticImage }) => {
   return (
      <Card elevation={0} sx={{}}>
         <CardMedia
            component="img"
            height="250"
            sx={{ borderRadius, objectFit: 'fill', width: '190px' }}
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
      </Card>
   );
};

export default TeamImageCard;

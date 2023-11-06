import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ITeamImageCard } from '../../../types/team';

const TeamImageCard: FC<ITeamImageCard> = ({ borderRadius, figCaption, name, staticImage }) => {
   return (
      <Card elevation={0}>
         <CardMedia component="img" height="180" sx={{ borderRadius }} image={staticImage} alt="Paella dish" />
         <CardContent>
            <Typography textAlign="center" variant="h6">
               {name}
            </Typography>
            <Typography textAlign="center" variant="body4">
               {figCaption}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default TeamImageCard;

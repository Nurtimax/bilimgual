import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ITeamImageCard } from '../../../types/team';

const TeamImageCard: FC<ITeamImageCard> = ({
   borderRadius,
   figCaption,
   name,
   staticImage,
   socials,
   address,
   city,
   company,
   country,
   email,
   fullName,
   id,
   phoneNumber,
   role,
   stateRegion,
   zipCode
}) => {
   return (
      <Card elevation={2} sx={{ width: '100%', display: 'grid', placeItems: 'center' }} id={String(id)}>
         <CardMedia
            component="img"
            height="350"
            width="250"
            sx={{ borderRadius, objectFit: 'fill', width: '100%' }}
            image={staticImage}
            alt={name + figCaption}
         />
         <CardContent>
            <Typography textAlign="center" variant="h6">
               {name}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {figCaption}
            </Typography>
            <Typography textAlign="center" variant="h6">
               {address}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {city}
            </Typography>
            <Typography textAlign="center" variant="h6">
               {company}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {country}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {email}
            </Typography>
            <Typography textAlign="center" variant="h6">
               {fullName}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {phoneNumber}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {role}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {stateRegion}
            </Typography>
            <Typography textAlign="center" variant="bodySmall">
               {zipCode}
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

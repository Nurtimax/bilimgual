import { Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LanguageIcon from '@mui/icons-material/Language';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
            sx={{ borderRadius, objectFit: 'fill', width: '90%', height: '350px', background: '#0000005a', mt: 2 }}
            image={staticImage}
            alt={name + figCaption}
         />
         <CardContent sx={{ display: 'grid', gap: 1 }}>
            <Typography variant="body2">{fullName}</Typography>
            <Typography variant="body4">{figCaption}</Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <MailOutlineIcon /> {email}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <PhoneIphoneIcon /> {phoneNumber}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <BusinessIcon /> {company}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <SupervisorAccountIcon /> {role}
            </Typography>
            <Typography variant="body3" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <LocationOnIcon />
               {address}
            </Typography>
            <Typography variant="body3" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <LocationCityIcon /> {city}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <LanguageIcon /> {country}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <HomeWorkIcon /> {stateRegion}
            </Typography>
            <Typography variant="body4" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
               <AllInboxIcon /> {zipCode}
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

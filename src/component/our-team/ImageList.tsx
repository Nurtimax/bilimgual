import { Grid } from '@mui/material';
import React from 'react';

import TeamImageCard from '../UI/team-image-card/TeamImageCard';
import { ITeamImageCard } from '../../types/team';
import { SOCIAL_ICONS } from '../../utils/constants/icons';

const teamList: ITeamImageCard[] = [
   {
      id: 1,
      name: 'Albina',
      figCaption: 'Frontend developer',
      staticImage: '/static/images/albina.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: SOCIAL_ICONS.github,
            id: 1,
            link: 'https://github.com/AzamatovaAlbina'
         }
      ]
   },
   {
      id: 2,
      name: 'Asatbek',
      figCaption: 'Frontend developer',
      staticImage: '/static/images/asatbek.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: SOCIAL_ICONS.github,
            id: 1,
            link: 'https://github.com/Asatbek1'
         }
      ]
   },
   {
      id: 3,
      name: 'Abdumalik',
      figCaption: 'Frontend developer',
      staticImage: '/static/images/malik.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: SOCIAL_ICONS.github,
            id: 1,
            link: 'https://github.com/kaamilov'
         }
      ]
   },
   {
      id: 4,
      name: 'Nurtilek',
      figCaption: 'Frontend developer',
      staticImage: '/static/images/nurtilek.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: SOCIAL_ICONS.github,
            id: 1,
            link: 'https://github.com/Nurtimax'
         }
      ]
   },
   {
      id: 5,
      name: 'Saltanat',
      figCaption: 'Frontend developer',
      staticImage: '/static/images/saltanat.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: SOCIAL_ICONS.github,
            id: 1,
            link: 'https://github.com/saltanatzakypova'
         }
      ]
   }
];

const ImageList = () => {
   return (
      <Grid container py={6}>
         {teamList.map((team) => (
            <Grid key={team.id} xs={2.4} sx={{ placeItems: 'center', display: 'grid' }}>
               <TeamImageCard {...team} />
            </Grid>
         ))}
      </Grid>
   );
};

export default ImageList;
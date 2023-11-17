import { Grid } from '@mui/material';
import React from 'react';

import TeamImageCard from '../UI/team-image-card/TeamImageCard';
import { ITeamImageCard } from '../../types/team';

const teamList: ITeamImageCard[] = [
   {
      id: 1,
      fullName: 'Albina',
      staticImage: '/static/images/albina.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: 'github',
            id: 'github',
            link: 'https://github.com/AzamatovaAlbina'
         }
      ],
      address: '',
      city: '',
      company: '',
      country: '',
      email: '',
      phoneNumber: '',
      role: '',
      stateRegion: '',
      zipCode: '',
      position: ''
   },
   {
      id: 2,
      fullName: 'Asatbek',
      staticImage: '/static/images/asatbek.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: 'github',
            id: 'github',
            link: 'https://github.com/Asatbek1'
         }
      ],
      address: '',
      city: '',
      company: '',
      country: '',
      email: '',
      phoneNumber: '',
      role: '',
      stateRegion: '',
      zipCode: '',
      position: ''
   },
   {
      id: 3,
      fullName: 'Abdumalik',
      staticImage: '/static/images/malik.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: 'github',
            id: 'github',
            link: 'https://github.com/kaamilov'
         }
      ],
      address: '',
      city: '',
      company: '',
      country: '',
      email: '',
      phoneNumber: '',
      role: '',
      stateRegion: '',
      zipCode: '',
      position: ''
   },
   {
      id: 4,
      fullName: 'Nurtilek',
      staticImage: '/static/images/nurtilek.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: 'github',
            id: 'github',
            link: 'https://github.com/Nurtimax'
         }
      ],
      address: '',
      city: '',
      company: '',
      country: '',
      email: '',
      phoneNumber: '',
      role: '',
      stateRegion: '',
      zipCode: '',
      position: ''
   },
   {
      id: 5,
      fullName: 'Saltanat',
      staticImage: '/static/images/saltanat.jpg',
      borderRadius: '1px 1px 1px 20px',
      socials: [
         {
            icon: 'github',
            id: 'github',
            link: 'https://github.com/saltanatzakypova'
         }
      ],
      address: '',
      city: '',
      company: '',
      country: '',
      email: '',
      phoneNumber: '',
      role: '',
      stateRegion: '',
      zipCode: '',
      position: ''
   }
];

const ImageList = () => {
   return (
      <Grid container py={6} spacing={1}>
         {teamList.map((team) => (
            <Grid
               item
               key={team.id}
               lg={2.4}
               md={4}
               sm={6}
               smMobile={12}
               mdMobile={12}
               lgMobile={12}
               xs={2.4}
               sx={{ placeItems: 'center', display: 'grid' }}
            >
               <TeamImageCard {...team} />
            </Grid>
         ))}
      </Grid>
   );
};

export default ImageList;

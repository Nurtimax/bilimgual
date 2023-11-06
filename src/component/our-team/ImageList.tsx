import { Grid } from '@mui/material';
import React from 'react';

import TeamImageCard from '../UI/team-image-card/TeamImageCard';
import { ITeamImageCard } from '../../types/team';

const teamList: ITeamImageCard[] = [
   {
      id: 1,
      name: 'Aktilek',
      figCaption: 'Bilingaula’s frontend developer',
      staticImage: '',
      borderRadius: '',
      socials: [
         {
            icon: <></>,
            id: 1,
            link: 'https://github.com/AktilekVIP'
         }
      ]
   }
];

const ImageList = () => {
   return (
      <Grid container>
         {teamList.map((team) => (
            <Grid key={team.id}>
               <TeamImageCard {...team} />
            </Grid>
         ))}
      </Grid>
   );
};

export default ImageList;

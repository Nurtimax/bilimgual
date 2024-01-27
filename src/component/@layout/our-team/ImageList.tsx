import { Grid } from '@mui/material';
import React, { FC } from 'react';

import TeamImageCard from '../../UI/team-image-card/TeamImageCard';
import { ITeamImageCard } from '../../../types/team';

interface ImageListProps {
   teams: ITeamImageCard[];
}

const ImageList: FC<ImageListProps> = ({ teams }) => {
   return (
      <Grid container py={6} spacing={1} rowSpacing={5}>
         {teams.map((team) => (
            <Grid item key={team.id} sx={{ placeItems: 'center', display: 'grid' }}>
               <TeamImageCard {...team} />
            </Grid>
         ))}
      </Grid>
   );
};

export default ImageList;

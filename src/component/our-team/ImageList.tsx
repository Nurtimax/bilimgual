import { Grid } from '@mui/material';
import React, { FC } from 'react';

import TeamImageCard from '../UI/team-image-card/TeamImageCard';
import { ITeamImageCard } from '../../types/team';

interface ImageListProps {
   teams: ITeamImageCard[];
}

const ImageList: FC<ImageListProps> = ({ teams }) => {
   return (
      <Grid container py={6} spacing={1} rowSpacing={5}>
         {teams.map((team) => (
            <Grid
               item
               key={team.id}
               lg={3}
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

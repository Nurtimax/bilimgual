import React, { FC } from 'react';
import { Grid } from '@mui/material';

import LinkItem from './LinkItem';

interface LinksListProps {
   [key: string]: unknown;
}

const LinksList: FC<LinksListProps> = () => {
   return (
      <Grid container columnSpacing={7.9}>
         <LinkItem to="/tests">tests</LinkItem>
         <LinkItem to="/results">MY RESULTS</LinkItem>
      </Grid>
   );
};

export default LinksList;

import { Grid } from '@mui/material';
import React from 'react';

import LinkItem from './LinkItem';

const RootLinksList = () => {
   return (
      <Grid container columnSpacing={3}>
         <LinkItem to="/root/team">teams</LinkItem>
         <LinkItem to="/root/sliders">sliders</LinkItem>
         <LinkItem to="/root/videos">videos</LinkItem>
         <LinkItem to="/root/footer">footer</LinkItem>
      </Grid>
   );
};

export default RootLinksList;

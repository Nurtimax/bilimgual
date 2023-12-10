import React, { FC } from 'react';
import { Grid } from '@mui/material';

import LinkItem from './LinkItem';

interface AdminLinksListProps {
   [key: string]: unknown;
}

const AdminLinksList: FC<AdminLinksListProps> = () => {
   return (
      <Grid container columnSpacing={3}>
         <LinkItem to="/admin/tests">tests</LinkItem>
         <LinkItem to="/admin/result">submitted results</LinkItem>
      </Grid>
   );
};

export default AdminLinksList;

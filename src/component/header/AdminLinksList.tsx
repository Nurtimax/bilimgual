import { FC } from 'react';
import { Box, Grid, styled } from '@mui/material';
import LinkItem from './LinkItem';

interface AdminLinksListProps {}

const AdminLinksList: FC<AdminLinksListProps> = ({}) => {
  return (
    <Grid container columnSpacing={7.9}>
      <LinkItem to="/tests">tests</LinkItem>
      <LinkItem to="/admin-result">submitted results</LinkItem>
    </Grid>
  );
};

export default AdminLinksList;

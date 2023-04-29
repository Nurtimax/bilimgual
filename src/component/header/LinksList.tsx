import { Grid } from '@mui/material';
import { FC } from 'react';
import LinkItem from './LinkItem';

interface LinksListProps {}

const LinksList: FC<LinksListProps> = ({}) => {
  return (
    <Grid container columnSpacing={7.9}>
      <LinkItem to="/">tests</LinkItem>
      <LinkItem to="/my-result">MY RESULTS</LinkItem>
    </Grid>
  );
};

export default LinksList;

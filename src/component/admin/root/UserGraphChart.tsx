import { Paper, Table, TableContainer, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import GithubGraphCard from '../../UI/GithubGraphCard';
import { useAppDispatch } from '../../../store/hooks';
import { getDataThunk } from '../../../store/slices/github-graph';

import TableHead from './TableHead';
import Body from './Body';

const UserGraphChart = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(getDataThunk());
   }, [dispatch]);

   return (
      <TableContainer sx={{ py: 1, px: 1 }} component={Paper}>
         <Typography variant="body2" py={1}>
            User graph
         </Typography>
         <Table color="inherit">
            <TableHead />
            <Body />
         </Table>
         <GithubGraphCard
            list={[
               { color: '#b6b9b7', id: 1 },
               { color: '#0e4429', id: 2 },
               { color: '#006d32', id: 3 },
               { color: '#26a641', id: 4 },
               { color: '#39d353', id: 5 }
            ]}
         />
      </TableContainer>
   );
};

export default UserGraphChart;

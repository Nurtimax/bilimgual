import { Box } from '@mui/material';
import React, { useEffect } from 'react';

import { getUsefullVideoCardsThunk, selectorUsefull } from '../../../store/slices/usefull';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CircularLoading from '../../loading';

import MainAdminUsefullList from './MainAdminUsefullList';

const MainAdminUsefull = () => {
   const dispatch = useAppDispatch();

   const { cards, loading } = useAppSelector(selectorUsefull);

   useEffect(() => {
      dispatch(getUsefullVideoCardsThunk());

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch]);

   if (loading) {
      return <CircularLoading open />;
   }

   return (
      <Box pb={5}>
         <MainAdminUsefullList cards={cards} />
      </Box>
   );
};

export default MainAdminUsefull;

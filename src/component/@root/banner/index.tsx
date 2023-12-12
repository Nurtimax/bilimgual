import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

import SliderList from '../../@layout/slider/SliderList';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
   actionSliders,
   getSlidersDataThunk,
   putSlidersDataThunk,
   selectorSliders
} from '../../../store/slices/sliders';
import CircularLoading from '../../loading';
import SlideCardWithInput from '../../UI/slide-card/SlideCardWithInput';

import SelectedList from './SelectedList';

const MainAdminBanner = () => {
   const { data, dublicateData, loading, selectedData, saveLoading } = useAppSelector(selectorSliders);

   const dispatch = useAppDispatch();

   const checkData = JSON.stringify(data) === JSON.stringify(dublicateData);

   useEffect(() => {
      dispatch(getSlidersDataThunk());
   }, [dispatch]);

   const handleSaveData = () => {
      dispatch(putSlidersDataThunk(data));
   };

   const handleAddData = () => {
      dispatch(actionSliders.addValues());
   };

   if (loading) {
      return <CircularLoading open />;
   }

   if (!data.length) {
      return 'No Data';
   }

   return (
      <>
         {saveLoading && <CircularLoading open />}

         <Stack display="grid" gridTemplateColumns="9fr 1.8fr">
            <Box>{selectedData && <SlideCardWithInput {...selectedData} />}</Box>
            <Stack gap={3}>
               <Button
                  variant="contained"
                  color="success"
                  fullWidth
                  onClick={handleSaveData}
                  disabled={checkData || loading || data.length === 0}
                  startIcon={<SaveIcon />}
               >
                  Save
               </Button>
               <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleAddData}
                  disabled={data.length === 10}
                  startIcon={<AddIcon />}
               >
                  Add Slide
               </Button>
               <SelectedList list={data} selectedValue={selectedData} />
            </Stack>
         </Stack>

         <Divider sx={{ py: 2 }} />

         <Typography variant="h4" pt={3}>
            Preview
         </Typography>

         <SliderList sliders={data} />
      </>
   );
};

export default MainAdminBanner;

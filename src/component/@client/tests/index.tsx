import { Box, Button, Card, CardActions, CardContent, Divider, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';

import { CustomTabPanel } from '../../UI/tab-panel';
import { checkArray } from '../../../utils/helpers/array';

import TestByType, { TestType } from './TestByType';

interface ITest {
   type: TestType;
   id: number;
}

interface IUseFormikInitialValues {
   selected: ITest;
   list: ITest[];
}

const normalise = (array: ITest[], value: number) => {
   const MIN = Math.min(...array.map((el) => el.id));
   const MAX = Math.max(...array.map((el) => el.id));

   const result = ((value - MIN) * 100) / (MAX - MIN);

   return result;
};

const MainClientTest = () => {
   const { values, setValues } = useFormik<IUseFormikInitialValues>({
      initialValues: {
         selected: { id: 1, type: 'highlight' },
         list: [
            { id: 1, type: 'highlight' },
            { id: 8, type: 'respondWords' },
            { id: 2, type: 'select' },
            { id: 3, type: 'descriptionImage' },
            { id: 4, type: 'mainIdea' },
            { id: 5, type: 'listenAndSelect' },
            { id: 6, type: 'recordSaying' },
            { id: 7, type: 'practice' }
         ]
      },
      onSubmit: () => {}
   });

   const handleNextTestIndex = () => {
      setValues((prev) => {
         const newSelected = prev.list.findIndex((el) => el.id === prev.selected.id);

         if (newSelected !== -1) {
            return {
               ...prev,
               selected: prev.list[newSelected + 1]
            };
         }

         return prev;
      });
   };

   const handlePrevTestIndex = () => {
      setValues((prev) => {
         const newSelected = prev.list.findIndex((el) => el.id === prev.selected.id);

         if (newSelected !== -1) {
            return {
               ...prev,
               selected: prev.list[newSelected - 1]
            };
         }

         return prev;
      });
   };

   const valuesList = checkArray(values.list);
   const firstListItem = valuesList?.[0];
   const lastListItem = valuesList?.[valuesList.length - 1];

   return (
      <Box>
         <Card sx={{ borderRadius: 5 }}>
            <CardContent sx={{ p: 3 }}>
               <Typography variant="h3">0:21</Typography>
               <LinearProgress
                  variant="determinate"
                  value={normalise(valuesList, values.selected.id)}
                  sx={{ height: 10, borderRadius: 5 }}
               />
            </CardContent>

            {valuesList.map((el) => (
               <CustomTabPanel style={{ minHeight: 600 }} key={el.id} index={el.id} value={values.selected.id}>
                  <TestByType type={el.type} />
               </CustomTabPanel>
            ))}

            <Divider />

            <CardActions sx={{ justifyContent: 'flex-end', p: 3 }}>
               <Button variant="come" onClick={handlePrevTestIndex} disabled={values.selected.id === firstListItem.id}>
                  Prev
               </Button>
               <Button variant="come" onClick={handleNextTestIndex} disabled={values.selected.id === lastListItem.id}>
                  Next
               </Button>
            </CardActions>
         </Card>
      </Box>
   );
};

export default MainClientTest;

import { Box, Button, Card, CardActions, CardContent, Divider, LinearProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CustomTabPanel } from '../../UI/tab-panel';

import TestByType, { TestType } from './TestByType';

interface ITest {
   type: TestType;
   id: number;
}

const dummy: ITest[] = [
   { id: 1, type: 'descriptionImage' },
   { id: 2, type: 'select' }
];

const MainClientTest = () => {
   const [testIndex, setTestIndex] = useState(0);
   const formik = useFormik({ initialValues: {}, onSubmit: () => {} });

   const handleNextTestIndex = () => {
      setTestIndex((prev) => prev + 1);
   };

   const handlePrevTestIndex = () => {
      setTestIndex((prev) => prev && prev - 1);
   };

   console.log(formik);

   return (
      <Box>
         <Card sx={{ borderRadius: 5 }}>
            <CardContent sx={{ p: 3 }}>
               <Typography variant="h3">0:21</Typography>
               <LinearProgress variant="determinate" value={10} sx={{ height: 10, borderRadius: 5 }} />
            </CardContent>

            {dummy.map((el, i) => (
               <CustomTabPanel key={el.id} index={i} value={testIndex}>
                  <TestByType type={el.type} />
               </CustomTabPanel>
            ))}

            <Divider />

            <CardActions sx={{ justifyContent: 'flex-end', p: 3 }}>
               <Button variant="come" onClick={handlePrevTestIndex} disabled={!testIndex}>
                  Prev
               </Button>
               <Button variant="come" onClick={handleNextTestIndex} disabled>
                  Next
               </Button>
            </CardActions>
         </Card>
      </Box>
   );
};

export default MainClientTest;

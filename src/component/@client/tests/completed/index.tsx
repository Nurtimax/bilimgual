import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Card from '../../../UI/card';
import BilingualIcon from '../../../../assets/icons/BilingualIcon';
import TestCompletedIcon from '../../../../assets/icons/TestCompletedIcon';

const TestCompleted = () => {
   const { replace } = useRouter();

   const handleTestDone = () => {
      replace('/tests');
   };

   return (
      <Card
         divider
         cardProps={{ sx: { px: 5.375, py: 5 } }}
         headerProps={{
            title: (
               <Stack direction="row" justifyContent="center" gap={2.25}>
                  <Typography>Test is complete!</Typography>
                  <TestCompletedIcon />
               </Stack>
            )
         }}
         contentProps={{
            children: (
               <Stack alignItems="center" pt={6.5} gap={3.25} pb={7.5}>
                  <BilingualIcon />
                  <Typography width="80%" textAlign="center">
                     Your results were sent for evaluation proccess. <br />
                     After evaluation your results will be sent to your email.
                  </Typography>
               </Stack>
            )
         }}
         actionProps={{
            children: (
               <Stack direction="row" justifyContent="space-between" width="100%" pt={4}>
                  <Button variant="outlined">TRY AGAIN</Button>
                  <Button variant="contained" onClick={handleTestDone}>
                     DONE
                  </Button>
               </Stack>
            )
         }}
      />
   );
};

export default TestCompleted;

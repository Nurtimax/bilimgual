import React from 'react';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import Card from '../../../../UI/card';

import VariantsSelectFields from './VariantsSelectFields';

const MainAdminTestAddVariantsSelect = () => {
   return (
      <Card
         cardProps={{ sx: { width: '80%', margin: '0 auto', borderRadius: '20px', p: '30px 80px 50px' } }}
         contentProps={{
            children: <VariantsSelectFields />
         }}
         actionProps={{
            children: (
               <Stack direction="row" justifyContent="flex-end" width="100%">
                  <Button variant="contained" startIcon={<AddIcon />}>
                     ADD MORE QUESTIONS
                  </Button>
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAddVariantsSelect;

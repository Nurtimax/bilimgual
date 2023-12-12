import React from 'react';
import { Button, Stack, Typography } from '@mui/material';

import Card from '../../UI/card';
import ListTestItemIcon from '../../../assets/icons/ListTestItemIcon';

const ListCard = () => {
   return (
      <Card
         cardProps={{ sx: { width: '80%', justifySelf: 'center', borderRadius: '10px' } }}
         contentProps={{
            sx: {
               px: 6,
               py: 8
            },
            children: (
               <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center" gap={5}>
                     <ListTestItemIcon />
                     <Stack gap="15px">
                        <Typography variant="h6" color="#3A10E5">
                           15 minutes
                        </Typography>
                        <Typography>English advanced test </Typography>
                        <Typography variant="body4">Train as much as you like.</Typography>
                     </Stack>
                  </Stack>
                  <Stack>
                     <Button variant="login">TRY TEST</Button>
                  </Stack>
               </Stack>
            )
         }}
      />
   );
};

export default ListCard;

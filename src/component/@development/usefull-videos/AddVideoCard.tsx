import { Box } from '@mui/material';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import React, { FC, memo } from 'react';

import Card from '../../UI/card';

const AddVideoCard: FC = memo(() => {
   return (
      <Card
         cardProps={{ sx: { height: '100%', width: '100%', cursor: 'pointer', '&:hover': { background: '#f6f4f4' } } }}
         contentProps={{
            children: (
               <Box sx={{ height: 266, display: 'grid', placeItems: 'center' }}>
                  <QueuePlayNextIcon sx={{ width: '30% !important', height: '30% !important' }} />
               </Box>
            )
         }}
      />
   );
});

export default AddVideoCard;

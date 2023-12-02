import { Box, Card } from '@mui/material';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import React, { FC, memo } from 'react';

const AddVideoCard: FC = memo(() => {
   return (
      <Card sx={{ height: '100%', width: '100%', cursor: 'pointer', '&:hover': { background: '#f6f4f4' } }}>
         <Box sx={{ height: 266, display: 'grid', placeItems: 'center' }}>
            <QueuePlayNextIcon sx={{ width: '30% !important', height: '30% !important' }} />
         </Box>
      </Card>
   );
});

export default AddVideoCard;

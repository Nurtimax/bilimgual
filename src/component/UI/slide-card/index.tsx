import { Card, CardHeader, CardMedia } from '@mui/material';
import React, { FC } from 'react';

import { ISlidersInitialStateData } from '../../../store/slices/sliders';

const SliderCard: FC<ISlidersInitialStateData> = ({ url, title, subTitle }) => {
   return (
      <Card
         elevation={10}
         sx={{
            justifySelf: 'flex-end',
            width: '90%',
            borderRadius: '3.5rem 3.5rem 3.5rem 0',
            p: '3.5rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            background: '#212629'
         }}
      >
         <CardHeader
            title={title}
            titleTypographyProps={{ sx: { fontSize: 38, color: '#FE9102' } }}
            subheader={subTitle}
            subheaderTypographyProps={{ sx: { fontSize: 24, pt: 5, color: 'white' } }}
         />
         <CardMedia image={url} sx={{ backgroundSize: 'contain', height: '320px' }} />
      </Card>
   );
};

export default SliderCard;

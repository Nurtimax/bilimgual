import { Card, CardHeader, CardMedia } from '@mui/material';
import React from 'react';

const SliderCard = () => {
   const url =
      'https://firebasestorage.googleapis.com/v0/b/bilingual-b4413.appspot.com/o/team%2Fslider-globus.svg?alt=media&token=936a8771-1ee5-4881-9302-7e5da4c0d402';
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
            title="Confirm your English proficiency today!"
            titleTypographyProps={{ sx: { fontSize: 38, color: '#FE9102' } }}
            subheader="For nearly 30 years, learners have turned to Rosetta Stone to build the fluency and confidence they need to speak new languages."
            subheaderTypographyProps={{ sx: { fontSize: 24, pt: 5, color: 'white' } }}
         />
         <CardMedia image={url} sx={{ backgroundSize: 'contain', height: '320px' }} />
      </Card>
   );
};

export default SliderCard;

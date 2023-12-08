import { CardContent, CardHeader, TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import img from '../../../../assets/images/banner-in-welcome.jpg';

const TestDescriptionImage = () => {
   return (
      <>
         <CardHeader
            title="Write on more sentences that describe the image"
            titleTypographyProps={{ textAlign: 'center' }}
         />

         <CardContent sx={{ display: 'grid', gridTemplateColumns: '1.5fr 3fr', alignItems: 'stretch', gap: 1, p: 3 }}>
            <Image alt="" src={img} style={{ width: '100%', aspectRatio: '2/1', height: 'inherit', borderRadius: 5 }} />
            <TextField
               id="outlined-multiline-static"
               label="Multiline"
               multiline
               rows={14}
               defaultValue="Default Value"
            />
         </CardContent>
      </>
   );
};

export default TestDescriptionImage;
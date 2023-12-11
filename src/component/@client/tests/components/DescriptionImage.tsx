import { Stack, TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import img from '../../../../assets/images/banner-in-welcome.jpg';

const TestDescriptionImage = () => {
   return (
      <Stack direction="row" display="grid" gridTemplateColumns="1fr 2fr" gap={1}>
         <Image alt="" src={img} style={{ width: '100%', aspectRatio: '1.5/1', height: 'inherit', borderRadius: 5 }} />
         <TextField id="outlined-multiline-static" label="Multiline" multiline rows={13} defaultValue="Default Value" />
      </Stack>
   );
};

export default TestDescriptionImage;

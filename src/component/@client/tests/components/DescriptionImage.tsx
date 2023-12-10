import { TextField } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import img from '../../../../assets/images/banner-in-welcome.jpg';
import Card from '../../../UI/card';

const TestDescriptionImage = () => {
   return (
      <>
         <Card
            headerProps={{
               title: 'Write on more sentences that describe the image',
               titleTypographyProps: { textAlign: 'center' }
            }}
            contentProps={{
               children: (
                  <>
                     <Image
                        alt=""
                        src={img}
                        style={{ width: '100%', aspectRatio: '2/1', height: 'inherit', borderRadius: 5 }}
                     />
                     <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={14}
                        defaultValue="Default Value"
                     />
                  </>
               )
            }}
         />
      </>
   );
};

export default TestDescriptionImage;

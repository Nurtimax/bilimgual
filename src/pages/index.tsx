import { Typography } from '@mui/material';
import { Metadata } from 'next';
import React from 'react';

import MainLayout from '../layout';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Home page'
};

export default function Home() {
   return (
      <>
         <MainLayout>
            <Typography variant="body4">Hello Bilingual</Typography>
         </MainLayout>
      </>
   );
}

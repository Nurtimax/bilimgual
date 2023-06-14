import { Metadata } from 'next';
import React from 'react';

import MainLayout from '../layout';
import CardChart from '../layout/card-chart';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Home page'
};

export default function Home() {
   return (
      <>
         <MainLayout>
            <CardChart />
         </MainLayout>
      </>
   );
}

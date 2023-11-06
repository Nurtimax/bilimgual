import { Metadata } from 'next';
import React from 'react';

import MainLayout from '../layout';
import CardChart from '../layout/card-chart';
import UserExperience from '../layout/user-experience';
import OurTeam from '../layout/out-team';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Home page'
};

export default function Home() {
   return (
      <MainLayout>
         <CardChart />
         <UserExperience />
         <OurTeam />
      </MainLayout>
   );
}

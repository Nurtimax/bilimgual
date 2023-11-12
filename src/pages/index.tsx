import { Metadata } from 'next';
import React from 'react';

import MainLayout from '../layout';
import CardChart from '../layout/card-chart';
import UserExperience from '../layout/user-experience';
import OurTeam from '../layout/out-team';
import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import Page from '../component/page';
import Footer from '../component/footer';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Home page'
};

export default function Home() {
   const { fields } = useAppSelector((state) => authSelector(state));
   console.log(fields, 'home');

   return (
      <Page title="Bilingual" canonical="/" description="Bilingual">
         <MainLayout>
            <CardChart />
            <UserExperience />
            <OurTeam />
         </MainLayout>
         <Footer />
      </Page>
   );
}

import { Metadata } from 'next';
import React from 'react';

import CardChart from '../layout/card-chart';
import UserExperience from '../layout/user-experience';
import OurTeam from '../layout/out-team';
import { useAppSelector } from '../store/hooks';
import { authSelector } from '../store/helpers/auth';
import Page from '../component/page';
import Footer from '../component/@layout/footer';
import LayoutSlider from '../component/@layout/slider';
import UseFullVideos from '../component/@development/usefull-videos';
import Banner from '../component/@layout/banner';
import LayoutExpand from '../layout/expand';

export const metadata: Metadata = {
   title: 'Home',
   description: 'Home page'
};

export default function Home() {
   const { fields } = useAppSelector((state) => authSelector(state));
   console.log(fields, 'home');

   return (
      <Page
         title="Bilingual"
         canonical="/"
         description="Bilingual is a web service designed for creating and taking tests in two languages."
      >
         <Banner />
         <CardChart />
         <UserExperience />
         <OurTeam />
         <LayoutSlider />
         <UseFullVideos />
         <LayoutExpand />
         <Footer />
      </Page>
   );
}

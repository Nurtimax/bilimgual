import React, { FC } from 'react';

import MainDevelopment from '../../component/development';
import Page from '../../component/page';

const Development: FC = () => {
   return (
      <Page title="Development" canonical={window.location.origin + '/development'} description="Bilingual development">
         <MainDevelopment />
      </Page>
   );
};

export default Development;

import React, { FC } from 'react';

import MainDevelopment from '../../component/development';

interface IDevelopmentProps {
   [key: string]: unknown;
}

const Development: FC<IDevelopmentProps> = () => {
   return (
      <>
         <MainDevelopment />
      </>
   );
};

export default Development;

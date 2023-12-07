import React, { FC } from 'react';

import TestDescriptionImage from './description-image';
import TestSelect from './test-select';

export type TestType = 'descriptionImage' | 'select';

interface ITestByTypeProps {
   type: TestType;
}

const TestByType: FC<ITestByTypeProps> = ({ type }) => {
   if (type === 'descriptionImage') {
      return <TestDescriptionImage />;
   }

   if (type === 'select') {
      return <TestSelect />;
   }

   return <div>TestByType</div>;
};

export default TestByType;

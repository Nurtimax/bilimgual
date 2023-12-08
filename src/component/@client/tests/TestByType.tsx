import React, { FC } from 'react';

import TestDescriptionImage from './description-image';
import TestSelect from './test-select';
import PracticeTest from './practice-test';
import HighlightsAnswer from './highlights_the_answer';

export type TestType = 'descriptionImage' | 'select' | 'practice' | 'highlight';

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

   if (type === 'practice') {
      return <PracticeTest />;
   }

   if (type === 'highlight') {
      return <HighlightsAnswer />;
   }

   return <div>TestByType</div>;
};

export default TestByType;

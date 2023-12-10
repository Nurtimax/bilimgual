import React, { FC } from 'react';

import TestDescriptionImage from './components/DescriptionImage';
import TestSelect from './components/TestSelect';
import PracticeTest from './components/PracticeTest';
import HighlightsAnswer from './components/HighlightsAnswer';
import SelectMainIdea from './components/SelectMainIdea';
import ListenAndSelect from './components/ListenAndSelect';
import RecordSaying from './components/RecordSaying';
import RespondWords from './components/RespondWords';

export type TestType =
   | 'descriptionImage'
   | 'select'
   | 'practice'
   | 'highlight'
   | 'mainIdea'
   | 'listenAndSelect'
   | 'recordSaying'
   | 'respondWords';

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

   if (type === 'mainIdea') {
      return <SelectMainIdea />;
   }

   if (type === 'listenAndSelect') {
      return <ListenAndSelect />;
   }

   if (type === 'recordSaying') {
      return <RecordSaying />;
   }

   if (type === 'respondWords') {
      return <RespondWords />;
   }

   return <div>TestByType</div>;
};

export default TestByType;

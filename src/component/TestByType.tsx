import React, { FC } from 'react';

import TestDescriptionImage from './@client/tests/components/DescriptionImage';
import TestSelect from './@client/tests/components/TestSelect';
import PracticeTest from './@client/tests/components/PracticeTest';
import HighlightsAnswer from './@client/tests/components/HighlightsAnswer';
import SelectMainIdea from './@client/tests/components/SelectMainIdea';
import ListenAndSelect from './@client/tests/components/ListenAndSelect';
import RecordSaying from './@client/tests/components/RecordSaying';
import RespondWords from './@client/tests/components/RespondWords';
import AdminDescriptionImage from './@admin/tests/DescriptionImage';
import AdminTestSelect from './@admin/tests/TestSelect';

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
   variants: 'ADMIN' | 'USER';
}

const componentMap: Record<TestType, Record<'ADMIN' | 'USER', FC>> = {
   descriptionImage: {
      ADMIN: AdminDescriptionImage,
      USER: TestDescriptionImage
   },
   select: {
      ADMIN: AdminTestSelect,
      USER: TestSelect
   },
   practice: {
      ADMIN: PracticeTest,
      USER: PracticeTest
   },
   highlight: {
      ADMIN: HighlightsAnswer,
      USER: HighlightsAnswer
   },
   mainIdea: {
      ADMIN: SelectMainIdea,
      USER: SelectMainIdea
   },
   listenAndSelect: {
      ADMIN: ListenAndSelect,
      USER: ListenAndSelect
   },
   recordSaying: {
      ADMIN: RecordSaying,
      USER: RecordSaying
   },
   respondWords: {
      ADMIN: RespondWords,
      USER: RespondWords
   }
};

const TestByType: FC<ITestByTypeProps> = ({ type, variants }) => {
   const Component = (componentMap[type] && componentMap[type][variants]) || (() => <div>TestByType</div>);

   return <Component />;
};

export default TestByType;

import { ITestDescriptionImageProps } from '../component/@client/tests/components/DescriptionImage';
import { IHighlightsAnswerProps } from '../component/@client/tests/components/HighlightsAnswer';
import { TestType } from '../component/TestByType';

type ValuesByQuestionType<T extends string> = T extends 'highlights'
   ? ITestDescriptionImageProps & IHighlightsAnswerProps
   : unknown;

export interface InitialStateTestQuestions {
   id: string;
   name: string;
   duration: number;
   questionType: TestType;
   active: boolean;
   loading?: boolean;
   values?: ValuesByQuestionType<''>;
}

export interface InitialStateTest {
   id: string;
   title: string;
   active: boolean;
   shortDescription: string;
   questions: InitialStateTestQuestions[];
   loading?: boolean;
}

export interface ICreateTestByIdVaraintsThunk {
   question: InitialStateTestQuestions;
   id: string;
}

export interface InitialState {
   test: InitialStateTest[];
   question: InitialStateTestQuestions;
}

export interface IChangeQuestionPayload {
   key: keyof InitialStateTestQuestions;
   value: number | string;
}

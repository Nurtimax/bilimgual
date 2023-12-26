import { TestType } from '../component/TestByType';

export interface InitialStateTestQuestions {
   id: string;
   name: string;
   duration: number;
   questionType: TestType;
   active: boolean;
   loading?: boolean;
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
}

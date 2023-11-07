export interface IReduxAuthInitialState {
   fields: IReduxAuthInitialStateFields;
   error?: boolean;
   errorMessage?: string;
   loading?: boolean;
}

export interface IReduxAuthInitialStateFields {
   email: string;
   password: string;
}

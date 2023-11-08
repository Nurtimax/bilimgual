import { UserInfo, UserMetadata } from 'firebase/auth';

import { ERole } from './role';

export interface IReduxAuthInitialState {
   fields: IReduxAuthInitialStateFields;
   error?: boolean;
   errorMessage?: string;
   loading?: boolean;
}

export interface IUserMetaDataExtends extends UserMetadata {
   createdAt?: string;
   lastLoginAt?: string;
}

export interface IReduxAuthInitialStateFields {
   emailVerified: boolean;
   isAnonymous: boolean;
   metadata: IUserMetaDataExtends;
   providerData: UserInfo[];
   refreshToken: string;
   tenantId: null | string;
   displayName: null | string;
   email: null | string;
   phoneNumber: null | string;
   photoURL: null | string;
   providerId: string;
   uid: string;
   role: ERole;
}

export interface IUserRole {
   role: ERole;
}

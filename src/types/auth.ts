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

export interface IReduxAuthInitialStateFields extends IUserRole {
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

   tokenId: string;
}

export interface IUserRole {
   role: ERole;
   currentRole: ERole;
}

export interface IAdminUserCreatedAt {
   seconds: number;
   nanoseconds: number;
}

export interface IAdminUser {
   role: ERole;
   id: string;
   currentRole?: string;
   createdAt?: IAdminUserCreatedAt;
}

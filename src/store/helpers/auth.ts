import { User } from 'firebase/auth';

import { IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { RootState } from '../slices';

export interface IAuthUserData extends User {
   stsTokenManager: {
      accessToken?: string;
      expirationTime: number;
      refreshToken: string;
   };
}

export const authSelector = (state: RootState) => state.auth;

export const getAuthUserDataFields = (user: IAuthUserData, data: IUserRole): IReduxAuthInitialStateFields => {
   const {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerData,
      providerId,
      refreshToken,
      tenantId,
      uid,
      stsTokenManager
   } = user;

   return {
      displayName,
      email,
      emailVerified,
      isAnonymous,
      metadata,
      phoneNumber,
      photoURL,
      providerData,
      providerId,
      refreshToken,
      tenantId,
      uid,
      role: data.role,
      currentRole: data.currentRole,
      tokenId: stsTokenManager.accessToken || ''
   };
};

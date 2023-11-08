import { User } from 'firebase/auth';

import { IReduxAuthInitialStateFields, IUserRole } from '../../types/auth';
import { RootState } from '../slices';

export const authSelector = (state: RootState) => state.auth;

export const getAuthUserDataFields = (user: User, data: IUserRole): IReduxAuthInitialStateFields => {
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
      uid
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
      ...data
   };
};

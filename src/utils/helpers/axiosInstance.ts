import axios from 'axios';

import { FIREBASE_REALTIME_URL } from '../constants/_api';
import { store } from '../../store';

const headers = {
   'Content-Type': 'application/json'
};

const axiosInctanse = axios.create({
   baseURL: FIREBASE_REALTIME_URL,
   headers
});

axiosInctanse.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config };

      const refreshToken = store.getState()?.auth?.fields.tokenId;

      if (refreshToken) {
         updateConfig.params = { auth: refreshToken };
      }
      return updateConfig;
   },
   (error) => {
      return Promise.reject(error);
   }
);

axiosInctanse.interceptors.response.use(
   (response) => {
      return Promise.resolve(response);
   },
   (error) => {
      return Promise.reject(error);
   }
);

export default axiosInctanse;

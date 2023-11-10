import { CssBaseline, GlobalStyles } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

import Theme from '../component/UI/theme';
import { persistor, store } from '../store';

import AuthProvider from './AuthProvider';

interface IProvidersProps {
   children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
   return (
      <>
         <CssBaseline />
         <GlobalStyles
            styles={{
               body: {
                  background: '#FEF5E8'
               }
            }}
         />
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <AuthProvider>
                  <Theme>
                     <HelmetProvider>{children}</HelmetProvider>
                  </Theme>
               </AuthProvider>
            </PersistGate>
         </Provider>
      </>
   );
};

export default Providers;

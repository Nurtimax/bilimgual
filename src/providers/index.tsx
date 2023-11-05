import { CssBaseline, GlobalStyles } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Theme from '../component/UI/theme';
import { persistor, store } from '../store';

interface IProvidersProps {
   children: ReactNode;
}

const Providers: FC<IProvidersProps> = ({ children }) => {
   return (
      <>
         <CssBaseline />
         <GlobalStyles styles={{}} />
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <Theme>{children}</Theme>
            </PersistGate>
         </Provider>
      </>
   );
};

export default Providers;

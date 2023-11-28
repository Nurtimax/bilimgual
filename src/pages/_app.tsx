import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Providers from '../providers';
import { FIREBASE_REALTIME_URL } from '../utils/constants/_api';

export default function App({ Component, pageProps }: AppProps) {
   console.log(FIREBASE_REALTIME_URL);

   return (
      <Providers>
         <Component {...pageProps} />
         <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </Providers>
   );
}

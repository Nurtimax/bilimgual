import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'node_modules/video-react/dist/video-react.css';

import Providers from '../providers';
import MainLayout from '../layout';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <Providers>
         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>

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

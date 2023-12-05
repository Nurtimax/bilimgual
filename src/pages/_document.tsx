import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
   return (
      <Html lang="en">
         <Head />
         <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5" />
         <Script>
            {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V4WF9Z7HM5');`}
         </Script>
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

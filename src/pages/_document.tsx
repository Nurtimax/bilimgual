/* eslint-disable no-undef */
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5" />
            <Script
               dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               
               gtag('config', 'G-V4WF9Z7HM5');`
               }}
            />
         </Head>
         <body>
            <Main />
            <NextScript />
            {process.env.NODE_ENV === 'production' && (
               <>
                  <script
                     dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                 })(window,document,'script','dataLayer','GTM-MJN54M5X');`
                     }}
                  ></script>
                  <noscript>
                     <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-MJN54M5X"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                     ></iframe>
                  </noscript>

                  <script
                     type="text/javascript"
                     dangerouslySetInnerHTML={{
                        __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                 m[i].l=1*new Date();
                                 for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                 k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                 ym(95781166, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true
                                 });`
                     }}
                  ></script>
                  <noscript>
                     <div>
                        <img
                           src="https://mc.yandex.ru/watch/95781166"
                           style={{ position: 'absolute', left: '-99999px' }}
                           alt=""
                        />
                     </div>
                  </noscript>
               </>
            )}
         </body>
      </Html>
   );
}

import { Box } from '@mui/material';
import React, { FC, ReactNode, memo } from 'react';
import { Helmet } from 'react-helmet-async';

interface IPage {
   children: ReactNode;
   title: string;
   description: string;
   canonical: string;
}

const Page: FC<IPage> = memo(({ children, title, canonical, description }) => {
   return (
      <Box>
         <Helmet>
            {title && <title>{title}</title>}

            {canonical && <link rel="canonical" href={window.location.origin + canonical} />}

            {description && <meta name="description" content={description} />}

            <script async src="https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5" />
            <script
               dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               
               gtag('config', 'G-V4WF9Z7HM5');`
               }}
            />
            <script
               dangerouslySetInnerHTML={{
                  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJN54M5X');`
               }}
            ></script>
            <meta name="google-site-verification" content="dnno2GJ0DeIdWvtvWdh5qzlZC0Qp4YKQkzF75KddQHk" />
         </Helmet>
         {children}
         <noscript>
            <iframe
               src="https://www.googletagmanager.com/ns.html?id=GTM-MJN54M5X"
               height="0"
               width="0"
               style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
         </noscript>
      </Box>
   );
});

export default Page;

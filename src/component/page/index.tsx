import { Box } from '@mui/material';
import Script from 'next/script';
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

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5" />
            <Script
               dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               
               gtag('config', 'G-V4WF9Z7HM5');`
               }}
            />
         </Helmet>
         {children}
      </Box>
   );
});

export default Page;

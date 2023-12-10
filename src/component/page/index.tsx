/* eslint-disable no-undef */
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
      <>
         <Helmet>
            {title && <title>{title}</title>}

            {canonical && <link rel="canonical" href={window.location.origin + canonical} />}

            {description && <meta name="description" content={description} />}

            {process.env.NODE_ENV === 'production' && (
               <>
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-V4WF9Z7HM5" />
                  <script
                     dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
               
                              gtag('config', 'G-V4WF9Z7HM5');`
                     }}
                  />
                  <meta name="google-site-verification" content="dnno2GJ0DeIdWvtvWdh5qzlZC0Qp4YKQkzF75KddQHk" />
               </>
            )}
         </Helmet>
         {children}
      </>
   );
});

export default Page;

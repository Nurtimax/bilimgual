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
            {canonical && <link rel="canonical" href={canonical} />}
            {description && <meta name="description" content={description} />}
         </Helmet>
         {children}
      </Box>
   );
});

export default Page;

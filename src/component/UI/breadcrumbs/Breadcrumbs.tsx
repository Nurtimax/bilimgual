import React, { FC, ReactNode } from 'react';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import Link from 'next/link';

interface IBreadcrumb {
   title: string;
   link: string;
   id: string;
   icon?: ReactNode;
}

interface IBreadcrumbs {
   breadcrumbs: IBreadcrumb[];
   breadcrumbsIcon?: ReactNode;
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ breadcrumbs, breadcrumbsIcon }) => {
   return (
      <MuiBreadcrumbs separator={breadcrumbsIcon || '›'} aria-label="breadcrumb">
         {breadcrumbs.map((breadcrumb) => (
            <Link key={breadcrumb.id} href={breadcrumb.link} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
               {breadcrumb.icon}
               <Typography variant="bodySmall">{breadcrumb.title}</Typography>
            </Link>
         ))}
      </MuiBreadcrumbs>
   );
};

export default Breadcrumbs;

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';
import MainAdmin from '../../component/admin';

const Admin = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const router = useRouter();
   console.log(fields, 'admin');

   useEffect(() => {
      if (!fields.role.includes('ADMIN')) {
         router.replace('/');
      }
   }, [fields.role, router]);

   if (!fields.role.includes('ADMIN')) {
      return null; // or <></> if you prefer
   }

   return (
      <Container>
         <MainAdmin />
      </Container>
   );
};

export default Admin;

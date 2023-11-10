import React from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';
import MainAdmin from '../../component/admin';

const Admin = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (!fields.role.includes('ADMIN')) {
      replace('/');
      return <></>;
   }

   return (
      <Container>
         <MainAdmin />
      </Container>
   );
};

export default Admin;

import React from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';

const Admin = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (!fields.role.includes('ADMIN')) {
      replace('/');
      return <></>;
   }

   return <div>Admin</div>;
};

export default Admin;

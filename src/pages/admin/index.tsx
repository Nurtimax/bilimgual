import React from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';

const Admin = () => {
   const { fields } = useAppSelector((state) => authSelector(state));
   const { replace } = useRouter();

   if (fields.email && fields.role && fields.role.includes('ADMIN')) {
      return replace('/');
   }

   return <div>Admin</div>;
};

export default Admin;

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';

const Admin = () => {
   const { fields } = useAppSelector(authSelector);
   const { replace } = useRouter();

   useEffect(() => {
      if (fields.currentRole === 'ADMIN') {
         replace('/admin/tests');
      } else {
         replace('/');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fields.currentRole]);

   return <></>;
};

export default Admin;

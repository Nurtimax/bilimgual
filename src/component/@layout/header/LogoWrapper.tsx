import Link from 'next/link';
import React from 'react';

import { BilingualFullIcon } from '../../../assets/icons/BilingualFullIcon';
import { useAppSelector } from '../../../store/hooks';
import { authSelector } from '../../../store/helpers/auth';
import { ERole } from '../../../types/role';

const LogoWrapper = () => {
   const { fields } = useAppSelector(authSelector);

   const role: ERole = fields.currentRole;

   const roleCondition = role?.includes('ADMIN');
   const roleRoot = role?.includes('ROOT');

   const href = roleRoot ? '/root' : roleCondition ? '/admin' : '/';

   return (
      <Link href={href}>
         <BilingualFullIcon className="logo" />
      </Link>
   );
};

export default LogoWrapper;

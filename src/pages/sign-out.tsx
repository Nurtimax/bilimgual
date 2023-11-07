import { signOut } from 'firebase/auth';
import React, { FC, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { auth } from '../firebase';

const SignOut: FC = () => {
   const [loading, setLoading] = useState(false);
   const pathname = useRouter();

   useEffect(() => {
      const logOutHandler = async () => {
         setLoading(true);
         try {
            await signOut(auth);
         } catch (error) {
            if (error instanceof Error) {
               toast.error(error.message);
            }
         }
         setLoading(false);
      };

      logOutHandler();
   }, []);

   if (loading) {
      return <h1>Sign out...</h1>;
   }

   pathname.replace('');

   return <></>;
};

export default SignOut;

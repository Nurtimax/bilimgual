import React, { memo, useEffect } from 'react';
import { Container, styled } from '@mui/material';
import { useRouter } from 'next/router';

import MainAdmin from '../../component/@root';
import ToolbarComponent from '../../component/page/ToolbarComponent';
import { useAppSelector } from '../../store/hooks';
import { authSelector } from '../../store/helpers/auth';

const RootStyle = styled(ToolbarComponent)`
   background-color: #afdcf0;
   min-height: 100vh;
`;

const Admin = memo(() => {
   const { fields } = useAppSelector(authSelector);
   const { replace } = useRouter();

   useEffect(() => {
      if (fields.currentRole === 'ROOT') {
         replace('/root');
      } else {
         replace('/');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fields.currentRole]);
   return (
      <RootStyle>
         <Container>
            <MainAdmin />
         </Container>
      </RootStyle>
   );
});

export default Admin;

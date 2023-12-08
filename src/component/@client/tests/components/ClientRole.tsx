import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import ClientRoleImg from '../../../../assets/icons/ClientRoleImg';

const StyleContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginTop: '4rem',
   '& h2': {
      marginTop: '3rem',
      color: '#4C4859',
      fontFamily: 'DINNextRoundedLTW01-Regular',
      fontStyle: 'normal'
   },
   '& svg': {
      width: '300px',
      height: '130px',
      marginTop: '4rem'
   }
}));

const StyleMainContainer = styled(Box)(() => ({
   backgroundColor: '#ffffff',
   width: '56.25rem',
   height: '34rem',
   borderRadius: '10px',
   p: {
      marginTop: '2rem',
      color: '#4C4859',
      fontFamily: 'DINNextRoundedLTW01-Regular',
      textTransform: 'capitalize'
   }
}));

const ClientRole = () => {
   return (
      <StyleContainer>
         <StyleMainContainer>
            <h2>checking your device...</h2>
            <p>this process is automatic, and may take a few second. please wait...</p>
            <ClientRoleImg />
         </StyleMainContainer>
      </StyleContainer>
   );
};

export default ClientRole;

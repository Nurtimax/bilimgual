import { Stack, Typography } from '@mui/material';
import React from 'react';

import { BilingualFullIcon } from '../../../assets/icons/BilingualFullIcon';

const ClientFooter = () => {
   return (
      <Stack
         py={1.75}
         bgcolor="#fff"
         direction="row"
         alignItems="flex-end"
         justifyContent="center"
         zIndex={10}
         position="sticky"
      >
         <BilingualFullIcon height={26} width={98} />
         <Typography variant="body2" lineHeight="24px" fontSize="15px" color="#98A2B3">
            © 2023 Nurtimax
         </Typography>
      </Stack>
   );
};

export default ClientFooter;

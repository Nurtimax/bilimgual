import { Box, Divider, IconButton, Paper, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC, ReactNode, memo } from 'react';

import SignInBilingualLogo from '../../../assets/icons/SignIn';
import SocialFroms from '../SocialFroms';
import Card from '../card';

interface ILoginCard {
   handleBackNavigate: () => void;
   cardHeaderTitle: string;
   forms: ReactNode;
   haveAccountNode: ReactNode;
}

const LoginCard: FC<ILoginCard> = memo(({ handleBackNavigate, cardHeaderTitle, forms, haveAccountNode }) => {
   return (
      <Stack direction="row" sx={{ display: 'grid', placeItems: 'center' }}>
         <Card
            cardProps={{ elevation: 2, component: Paper, sx: { background: 'white', width: '40%' } }}
            headerProps={{
               action: (
                  <IconButton onClick={handleBackNavigate}>
                     <CloseIcon />
                  </IconButton>
               ),
               title: (
                  <Box sx={{ display: 'grid', placeItems: 'center' }}>
                     <SignInBilingualLogo />
                     {cardHeaderTitle}
                  </Box>
               )
            }}
            contentProps={{
               children: (
                  <>
                     {forms}
                     <Divider />
                     <SocialFroms />
                     {haveAccountNode}
                  </>
               )
            }}
         />
      </Stack>
   );
});

export default LoginCard;

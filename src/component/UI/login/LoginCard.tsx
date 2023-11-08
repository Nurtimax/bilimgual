import { Box, Card, CardContent, CardHeader, Divider, IconButton, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC, ReactNode, memo } from 'react';

import SignInBilingualLogo from '../../../assets/icons/SignIn';
import SocialFroms from '../SocialFroms';

interface ILoginCard {
   handleBackNavigate: () => void;
   cardHeaderTitle: string;
   forms: ReactNode;
   haveAccountNode: ReactNode;
}

const LoginCard: FC<ILoginCard> = memo(({ handleBackNavigate, cardHeaderTitle, forms, haveAccountNode }) => {
   return (
      <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
         <Card elevation={2} component={Paper} sx={{ background: 'white', width: '40%' }}>
            <CardHeader
               action={
                  <IconButton onClick={handleBackNavigate}>
                     <CloseIcon />
                  </IconButton>
               }
               title={
                  <Box sx={{ display: 'grid', placeItems: 'center' }}>
                     <SignInBilingualLogo />
                     {cardHeaderTitle}
                  </Box>
               }
               titleTypographyProps={{ textAlign: 'center', variant: 'body1' }}
            />

            <CardContent sx={{ px: 4 }}>{forms}</CardContent>

            <Divider sx={{ color: 'black', px: 4, py: 2 }}>or</Divider>

            <CardContent sx={{ px: 4 }}>
               <SocialFroms />
            </CardContent>

            <CardContent sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, px: 4, color: '#757575' }}>
               {haveAccountNode}
            </CardContent>
         </Card>
      </Box>
   );
});

export default LoginCard;

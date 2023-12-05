import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';

import ExpandLinearIcon from '../../../assets/icons/ExpandLinear';

import ExpandCardList from './ExpandCardList';

const RootStyle = styled(Box)`
   padding: 2rem 0;
   position: relative;

   & svg {
      width: auto;
      height: auto;
   }
`;

const MainLayoutExpand = () => {
   return (
      <RootStyle>
         <Typography variant="h3" textAlign="center" color="#3752B4" py={3}>
            Learn more
         </Typography>

         <Box sx={{ display: 'grid', gridTemplateRows: '1.5fr 1fr 1fr 1fr 1fr', minHeight: '1671px' }}>
            <Box
               sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: -10,
                  position: 'absolute'
               }}
            >
               <ExpandLinearIcon />
            </Box>

            <ExpandCardList />
         </Box>

         <Stack direction="row" justifyContent="center" py={2}>
            <Button variant="begin" disabled>
               Button
            </Button>
         </Stack>
      </RootStyle>
   );
};

export default MainLayoutExpand;

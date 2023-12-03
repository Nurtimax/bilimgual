import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';

import ExpandLinearIcon from '../../../assets/icons/ExpandLinear';
import EarthWithPlaneExpand from '../../../assets/icons/EarthWithPlaneExpand';
import LayoutExpandBuiltIcon from '../../../assets/icons/LayoutExpandBuiltIcon';
import LayoutExpandSecurityIcon from '../../../assets/icons/LayoutExpandSecurityIcon';
import LayoutExpandDashboardIcon from '../../../assets/icons/LayoutExpandDashboardIcon';
import LayoutExpandDesignIcon from '../../../assets/icons/LayoutExpandDesignIcon';

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

            <Box>
               <Stack
                  direction="row"
                  display="grid"
                  gridTemplateColumns="0.8fr 1fr 0.8fr"
                  sx={{ placeItems: 'center' }}
               >
                  <Box>
                     <Typography variant="h5" pb={2}>
                        Expand your applicant pool
                     </Typography>
                     <Typography variant="body4" color="#23212A">
                        Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have
                        taken the Bilingual English Test because of its radical accessibility.
                     </Typography>
                  </Box>

                  <EarthWithPlaneExpand />
               </Stack>
            </Box>

            <Box>
               <Stack
                  direction="row"
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  sx={{ placeItems: 'flex-start' }}
               >
                  <Box />
                  <LayoutExpandBuiltIcon />
                  <Box>
                     <Typography variant="h5" pb={2}>
                        Expand your applicant pool
                     </Typography>
                     <Typography variant="body4" color="#23212A">
                        Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have
                        taken the Bilingual English Test because of its radical accessibility.
                     </Typography>
                  </Box>
               </Stack>
            </Box>

            <Box>
               <Stack
                  direction="row"
                  display="grid"
                  gridTemplateColumns="1fr 1.2fr 0.8fr"
                  sx={{ placeItems: 'flex-end' }}
               >
                  <Box>
                     <Typography variant="h5" pb={2}>
                        Expand your applicant pool
                     </Typography>
                     <Typography variant="body4" color="#23212A">
                        Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have
                        taken the Bilingual English Test because of its radical accessibility.
                     </Typography>
                  </Box>
                  <LayoutExpandSecurityIcon />
               </Stack>
            </Box>

            <Box>
               <Stack
                  direction="row"
                  display="grid"
                  gridTemplateColumns="1fr 1fr 1fr"
                  sx={{ placeItems: 'flex-start' }}
               >
                  <Box />
                  <LayoutExpandDashboardIcon />
                  <Box>
                     <Typography variant="h5" pb={2}>
                        Expand your applicant pool
                     </Typography>
                     <Typography variant="body4" color="#23212A">
                        Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have
                        taken the Bilingual English Test because of its radical accessibility.
                     </Typography>
                  </Box>
               </Stack>
            </Box>

            <Box>
               <Stack direction="row" display="grid" gridTemplateColumns="1fr 1fr 1fr" sx={{ placeItems: 'flex-end' }}>
                  <Box>
                     <Typography variant="h5" pb={2}>
                        Expand your applicant pool
                     </Typography>
                     <Typography variant="body4" color="#23212A">
                        Tap into a diverse pool of candidates from 210+ countries and territories of origin, who have
                        taken the Bilingual English Test because of its radical accessibility.
                     </Typography>
                  </Box>
                  <LayoutExpandDesignIcon />
               </Stack>
            </Box>
         </Box>
         <Stack direction="row" justifyContent="center" py={2}>
            <Button variant="begin">Button</Button>
         </Stack>
      </RootStyle>
   );
};

export default MainLayoutExpand;

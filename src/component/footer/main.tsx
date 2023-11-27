import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, styled, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

import { BilingualFullIcon } from '../../assets/icons/BilingualFullIcon';
import { SOCIAL_ICONS } from '../../utils/constants/icons';
import axiosInctanse from '../../utils/helpers/axiosInstance';
import { IFAQValues } from '../admin/footer';

const StyledMainFooter = styled(Box)`
   padding: 2rem 0 0;
`;

const MainFooter = () => {
   const [accordions, setAccordions] = useState<IFAQValues[]>([]);

   const getAccordions = async () => {
      try {
         const response = await axiosInctanse.get(`footer_faq/users.json`);

         const accordions = Array.isArray(response.data) ? response.data : [];

         setAccordions(accordions);
      } catch (error) {
         if (error instanceof Error) {
            toast.error(error.message);
         }
      }
   };

   useEffect(() => {
      getAccordions();
   }, []);

   return (
      <StyledMainFooter>
         <Typography variant="h5" color="inherit">
            FAQ:
         </Typography>
         <Box pt={5} pb={10}>
            {accordions.map((accordion) => (
               <Accordion key={accordion.id}>
                  <AccordionSummary expandIcon={<AddIcon sx={{ color: 'white' }} />}>
                     {accordion.question}{' '}
                  </AccordionSummary>
                  <AccordionDetails sx={{ color: '#fff' }}>{accordion.answer}</AccordionDetails>
               </Accordion>
            ))}
         </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <BilingualFullIcon style={{ height: '44px', width: '220px' }} />
            <Box py={1}>
               {[SOCIAL_ICONS.youtube, SOCIAL_ICONS.facebook, SOCIAL_ICONS.instagram].map((icon, i) => (
                  <IconButton color="inherit" size="large" key={i}>
                     {icon}
                  </IconButton>
               ))}
            </Box>
         </Box>
         <Typography variant="subtitle1" textAlign="center" py={1} color="#98A2B3" fontWeight={400}>
            © Copyright PeakSoft. All Rights Reserved
         </Typography>
      </StyledMainFooter>
   );
};

export default MainFooter;

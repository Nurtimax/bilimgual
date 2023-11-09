import {
   Accordion as MuiAccordion,
   AccordionDetails,
   AccordionProps,
   AccordionSummary as MuiAccordionSummary,
   Box,
   Typography,
   styled,
   AccordionSummaryProps,
   IconButton
} from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

import { BilingualFullIcon } from '../../assets/icons/BilingualFullIcon';
import { SOCIAL_ICONS } from '../../utils/constants/icons';

const StyledMainFooter = styled(Box)`
   padding: 2rem 0 0;
`;

const accordions = [
   {
      id: 1,
      summary: 'What is Bilingual?',
      details:
         "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test. An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
   },
   {
      id: 2,
      summary: 'How can I show what I am typing during the test? ',
      details:
         "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test. An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
   },
   {
      id: 3,
      summary: 'Why should I take the Bilingual English Test? ',
      details:
         "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test. An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
   },
   {
      id: 4,
      summary: 'How can I make sure my microphone picks up my voice clearly? ',
      details:
         "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test. An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
   },
   {
      id: 5,
      summary: "How can I allow a test to record my computer's screen? ",
      details:
         "Please take the test in a separate, quiet room. Close all other windows and close all other programs before starting the test. An external USB keyboard or mouse can be used during the test. However, when answering test questions, you should only type on one keyboard and use one mouse. Don't switch between multiple keyboards or mice."
   }
];

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
   () => ({
      border: `1px solid #4A4A4A`,
      borderRight: 'none',
      borderLeft: 'none',
      padding: '1rem 0',
      '&:not(:last-child)': {
         borderBottom: 0
      },
      '&:before': {
         display: 'none'
      }
   })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
   padding: 0,
   color: 'white',
   fontSize: '20px',
   fontWeight: '600',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)'
   },
   '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1)
   }
}));

const MainFooter = () => {
   return (
      <StyledMainFooter>
         <Typography variant="h5" color="inherit">
            FAQ:
         </Typography>
         <Box pt={5} pb={10}>
            {accordions.map((accordion) => (
               <Accordion key={accordion.id}>
                  <AccordionSummary expandIcon={<AddIcon sx={{ color: 'white' }} />}>
                     {accordion.summary}{' '}
                  </AccordionSummary>
                  <AccordionDetails>{accordion.details}</AccordionDetails>
               </Accordion>
            ))}
         </Box>
         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <BilingualFullIcon style={{ height: '44px', width: '220px' }} />
            <Box py={1}>
               {[SOCIAL_ICONS.youtube, SOCIAL_ICONS.facebook, SOCIAL_ICONS.instagram].map((icon) => (
                  <IconButton color="inherit" size="large">
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

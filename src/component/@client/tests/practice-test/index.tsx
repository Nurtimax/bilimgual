import React from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { Laptop, AvTimer, ContactEmergency } from '@mui/icons-material';

import BannerTest from '../../../../assets/icons/BannerTest';

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   flexDirection: 'column',
   textAlign: 'center',
   marginTop: '4rem',
   '& h2': {
      marginTop: '3rem',
      color: '#4C4859',
      fontFamily: 'DINNextRoundedLTW01-Regular'
   },
   '& hr': {
      width: '50.8125rem',
      height: '0.09563rem',
      marginLeft: '2.5rem',
      marginTop: '3.7rem',
      border: '2px',
      background: '#D4D0D0'
   }
}));

const StyledMiniContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'start',
   justifyContent: 'start',
   flexDirection: 'column',
   borderRadius: '10px',
   '& .Laptop, & .AvTimer, & .ContactEmergency ,': {
      display: 'flex',
      textAlign: 'center',
      gap: '1.5rem'
   }
}));

const ContainerIkons = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: '3rem',
   gap: '2rem',
   fontFamily: 'DINNextRoundedLTW01-Regular',
   color: '#4C4859'
}));

const StyledContainerMain = styled(Box)(() => ({
   backgroundColor: '#ffffff',
   width: '56.25rem',
   height: '34rem',
   borderRadius: '10px',
   p: {
      marginTop: '4rem',
      color: '#4C4859',
      fontFamily: 'DINNextRoundedLTW01-Regular'
   }
}));

const PracticeTest = () => (
   <StyledContainer>
      <StyledContainerMain>
         <div>
            <h2>Take a free practice test and estimate your score</h2>
            <ContainerIkons>
               <BannerTest />
               <StyledMiniContainer>
                  <div className="Laptop">
                     <Laptop style={{ color: '#4522e7' }} />
                     <span>See what the test is like *</span>
                  </div>
                  <div className="AvTimer">
                     <AvTimer style={{ color: '#4522e7' }} />
                     <span> Practice takes just minutes</span>
                  </div>
                  <div className="ContactEmergency">
                     <ContactEmergency style={{ color: '#4522e7' }} />
                     <span>Get an unofficial score estimate</span>
                  </div>
               </StyledMiniContainer>
            </ContainerIkons>
            <p>* The practice test may include question types that may not appear on the certified test.</p>
         </div>
      </StyledContainerMain>
   </StyledContainer>
);

export default PracticeTest;

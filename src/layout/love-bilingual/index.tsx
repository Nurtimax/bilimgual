import { Container, Typography, styled } from '@mui/material';
import React from 'react';

import SliderList from '../../component/@layout/love-bilingual/SliderList';

export interface ISliderList {
   photoURL?: string;
   description?: string;
   name?: string;
   rating?: number;
}

const RootStyle = styled('div')`
   width: 100%;
   height: 100%;
`;

const LoveBilingual = () => {
   const sliders: ISliderList[] = [
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova 1',
         rating: 5
      },
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova 2',
         rating: 5
      },
      {
         photoURL: '/static/icons/logo_B.jpg',
         description:
            'Bilingual has helped me to get a good grasp of the language in a fun and challenging way. I enjoy the dialogues and scenarios, which include helpful phrases that can be used in various situations.',
         name: '- Alina Begishova 3',
         rating: 5
      }
   ];

   if (sliders.length < 3) {
      return null;
   }

   return (
      <RootStyle>
         <Container>
            <Typography variant="h3" textAlign="center" color="#3752B4" pb={7.5}>
               Why people love Bilingual
            </Typography>
            <SliderList sliders={sliders} />
         </Container>
      </RootStyle>
   );
};

export default LoveBilingual;

import React, { FC, ReactNode, memo } from 'react';
import { Box, styled } from '@mui/material';

interface ICardBox {
   children: ReactNode;
}

const StyledCardBox = styled(Box)(() => ({
   position: 'relative',

   '& #card_box': {
      padding: '1.5rem 1rem .8rem',
      background: 'rgba(255, 255, 255, 0.94)',
      border: '1.5px solid #3785D7',
      borderRadius: '8px',
      position: 'absolute',
      inset: '25% 32.5%',
      '& svg': {
         width: '9rem'
      }
   }
}));

const CardBox: FC<ICardBox> = memo(({ children }) => {
   return (
      <StyledCardBox>
         <Box id="card_box">{children}</Box>
      </StyledCardBox>
   );
});

export default CardBox;

import React, { FC, ReactNode, memo } from 'react';
import { Box, styled } from '@mui/material';

interface ICardBox {
   children: ReactNode;
   background: ReactNode;
}

const StyledCardBox = styled(Box)(() => ({
   position: 'relative',

   '& #card_box': {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& #content': {
         width: 'auto',
         padding: '1.5rem 1rem .8rem',
         background: 'rgba(255, 255, 255, 0.94)',
         border: '1.5px solid #3785D7',
         borderRadius: '8px'
      },
      '& svg': {
         width: '9rem'
      }
   }
}));

const CardBox: FC<ICardBox> = memo(({ children, background }) => {
   return (
      <StyledCardBox>
         {background}

         <Box id="card_box">
            <div id="content">{children}</div>
         </Box>
      </StyledCardBox>
   );
});

export default CardBox;

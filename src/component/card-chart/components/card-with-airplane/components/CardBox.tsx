import React, { FC } from 'react';
import { Grid, styled } from '@mui/material';

import TenThousand from '../../../../../assets/icons/TenThousand';

interface ICardBoxProps {
   [key: string]: unknown;
}

const StyledCardBox = styled(Grid)(() => ({
   padding: '1.5rem 1rem .8rem',
   background: 'rgba(255, 255, 255, 0.94)',
   border: '1.5px solid #3785D7',
   borderRadius: '8px',
   position: 'absolute',
   top: '20%',
   '& svg': {
      width: '9rem'
   }
}));

const CardBox: FC<ICardBoxProps> = () => {
   return (
      <StyledCardBox item>
         <TenThousand />
      </StyledCardBox>
   );
};

export default CardBox;

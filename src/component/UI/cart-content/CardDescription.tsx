import React, { FC, memo } from 'react';
import { Typography, styled } from '@mui/material';

import { TYPOGRAPHY_CLASSNAMES } from '../typography';

interface ICardDescription {
   html: string;
}

const StyledCardDescription = styled(Typography)(() => ({
   justifyContent: 'center',
   display: 'grid',
   width: '100%',
   minWidth: '100%',
   placeContent: 'center',
   textAlign: 'center'
}));

const CardDescription: FC<ICardDescription> = memo(({ html }) => {
   return (
      <StyledCardDescription
         variant="body4"
         className={TYPOGRAPHY_CLASSNAMES.cardDescription}
         dangerouslySetInnerHTML={{ __html: html }}
      />
   );
});

export default CardDescription;

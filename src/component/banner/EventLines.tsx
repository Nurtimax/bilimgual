import React, { FC } from 'react';
import { Box, styled } from '@mui/material';

import { Button } from '../UI';

interface IEventLinesProps {
   [key: string]: unknown;
}

const StyledEventLines = styled(Box)(() => ({}));

const EventLines: FC<IEventLinesProps> = () => {
   return (
      <StyledEventLines>
         <Button variant="begin">TO BEGIN</Button>
      </StyledEventLines>
   );
};

export default EventLines;

import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ExpandCardType } from './ExpandCardList';

const ExpandCardItem: FC<ExpandCardType> = ({ description, icon, style, id, title }) => {
   const content = [
      <Box>
         <Typography variant="h5" pb={2}>
            {title}
         </Typography>
         <Typography variant="body4" color="#23212A">
            {description}
         </Typography>
      </Box>,
      icon
   ];

   return (
      <Box key={id}>
         <Stack direction="row" display="grid" sx={style}>
            {id % 2 === 0 ? (
               <>
                  <div />
                  {content.reverse()}
               </>
            ) : (
               content
            )}
         </Stack>
      </Box>
   );
};

export default ExpandCardItem;

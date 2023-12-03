import { Box, Stack, Typography } from '@mui/material';
import React, { FC } from 'react';

import { ExpandCardType } from './ExpandCardList';

const ExpandCardItem: FC<ExpandCardType> = ({ description, icon, style, id, title }) => {
   return (
      <Box key={id}>
         <Stack direction="row" display="grid" sx={style}>
            <Box>
               <Typography variant="h5" pb={2}>
                  {title}
               </Typography>
               <Typography variant="body4" color="#23212A">
                  {description}
               </Typography>
            </Box>

            {icon}
         </Stack>
      </Box>
   );
};

export default ExpandCardItem;

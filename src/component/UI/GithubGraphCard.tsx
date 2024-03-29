import { Box, Tooltip, Typography, styled } from '@mui/material';
import React, { FC, memo } from 'react';

import { ICardGraphList } from '../../types/graph';

interface IGithubGraphCard {
   startTitle?: string;
   endTitle?: string;
   list: ICardGraphList[];
}

const StyledCard = styled(Box)`
   width: 10px;
   height: 10px;
   border-radius: 2px;
`;

const GithubGraphCard: FC<IGithubGraphCard> = memo(({ endTitle, startTitle, list }) => {
   return (
      <Box pt={1} display="flex" alignItems="center" gap={0.2}>
         <Typography sx={{ fontSize: '12px' }}>{startTitle || 'Less'}</Typography>
         {list.map((item) => (
            <Tooltip title={item?.text || ''}>
               <StyledCard key={item.id} sx={{ background: item.color }} />
            </Tooltip>
         ))}

         <Typography sx={{ fontSize: '12px' }}>{endTitle || 'More'}</Typography>
      </Box>
   );
});

export default GithubGraphCard;

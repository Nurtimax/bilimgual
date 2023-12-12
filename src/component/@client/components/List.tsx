import React, { FC } from 'react';
import { Stack } from '@mui/material';

import ListCard from './ListCard';

interface IList {
   array: number[];
}

const List: FC<IList> = ({ array }) => {
   return (
      <Stack alignContent="center" display="grid">
         {array.map((_, i) => (
            <ListCard key={i} />
         ))}
      </Stack>
   );
};

export default List;

import React, { useMemo } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

import CustomTable, { ITableHeaders, ITableRow } from '../UI/table/CustomTable';
import { dateFormat } from '../../utils/helpers/graph';

const tableHeaders: ITableHeaders[] = [
   { label: '#', rowKey: 'id', tableProps: { sx: { minWidth: '5%' } } },
   { label: 'Date of Submition', rowKey: 'date', tableProps: { sx: { minWidth: '25%' } } },
   { label: 'Test name', rowKey: 'name', tableProps: { sx: { minWidth: '25%' } } },
   { label: 'Status', rowKey: 'status', tableProps: { sx: { minWidth: '20%' } } },
   { label: 'Score', rowKey: 'score', tableProps: { sx: { minWidth: '15%' } } },
   { label: '', rowKey: 'actions', tableProps: { sx: { minWidth: '10%' } } }
];

const MainClientTest = () => {
   const { push } = useRouter();

   const handleNavigate = (pathname: string | number) => {
      push(`/tests/${pathname}`);
   };

   const tableRows: ITableRow[] = useMemo(
      () => [
         {
            id: <Stack onClick={() => handleNavigate(1)}>{1}</Stack>,
            date: (
               <Stack onClick={() => handleNavigate(1)}>
                  <Typography variant="body3">{dateFormat(new Date())}</Typography>
                  <Typography variant="body2">{dateFormat(new Date())}</Typography>
               </Stack>
            ),
            name: <Stack onClick={() => handleNavigate(1)}>English advanced test</Stack>,
            status: <Stack onClick={() => handleNavigate(1)}>Not availabled</Stack>,
            score: <Stack onClick={() => handleNavigate(1)}>0</Stack>,
            actions: (
               <Stack onClick={() => handleNavigate(1)} alignItems="flex-end">
                  <IconButton color="error">
                     <DeleteIcon />
                  </IconButton>
               </Stack>
            )
         }
      ],
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   );

   return <CustomTable tableHeaders={tableHeaders} tableRows={tableRows} />;
};

export default MainClientTest;

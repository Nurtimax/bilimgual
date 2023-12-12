import React, { useMemo } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';

import CustomTable, { ITableHeaders, ITableRow } from '../../UI/table/CustomTable';
import { dateFormat } from '../../../utils/helpers/graph';

const tableHeaders: ITableHeaders[] = [
   { label: '#', rowKey: 'id', tableProps: { sx: { minWidth: '5%' } } },
   { label: 'Date of Submition', rowKey: 'date', tableProps: { sx: { minWidth: '25%' } } },
   { label: 'Test name', rowKey: 'name', tableProps: { sx: { minWidth: '25%' } } },
   { label: 'Status', rowKey: 'status', tableProps: { sx: { minWidth: '20%' } } },
   { label: 'Score', rowKey: 'score', tableProps: { sx: { minWidth: '15%' } } },
   { label: '', rowKey: 'actions', tableProps: { sx: { minWidth: '10%' } } }
];

const MainClientResults = () => {
   const { push } = useRouter();

   const handleNavigate = (pathname: string | number) => {
      push(`/tests/${pathname}`);
   };

   const tableRows: ITableRow[] = useMemo(
      () => [
         {
            id: 1,
            date: (
               <>
                  <Typography variant="body3">{dateFormat(new Date())}</Typography>
                  <Typography variant="body2">{dateFormat(new Date())}</Typography>
               </>
            ),
            name: <Stack onClick={() => handleNavigate(1)}>English advanced test</Stack>,
            status: 'Not availabled',
            score: '0',
            actions: (
               <Stack alignItems="flex-end">
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

export default MainClientResults;

import React, { useMemo } from 'react';
import { Button, IconButton, Stack, Switch, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

import CustomTable, { ITableHeaders, ITableRow } from '../UI/table/CustomTable';

const tableHeaders: ITableHeaders[] = [
   { label: '', rowKey: 'title' },
   { label: '', rowKey: 'actions' }
];

const MainAdmin = () => {
   const { push } = useRouter();

   const data: ITableRow[] = useMemo(
      () => [
         {
            title: (
               <Typography color="#4C4859" variant="body2">
                  {'Test  number 1'}
               </Typography>
            ),
            actions: (
               <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={3} py={3}>
                  <Switch id="ios" />
                  <IconButton>
                     <EditNoteIcon />
                  </IconButton>
                  <IconButton color="error">
                     <DeleteIcon />
                  </IconButton>
               </Stack>
            )
         }
      ],
      []
   );

   return (
      <CustomTable
         head={
            <Stack direction="row" justifyContent="flex-end">
               <Button variant="come" startIcon={<AddIcon />} onClick={() => push('/admin/tests/add')}>
                  ADD NEW TEST
               </Button>
            </Stack>
         }
         tableHeaders={tableHeaders}
         tableRows={data}
         tableRowProps={{ sx: { px: 2 } }}
      />
   );
};

export default MainAdmin;

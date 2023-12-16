import React, { useMemo } from 'react';
import { Button, IconButton, Stack, Switch, Typography } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

import CustomTable, { ITableHeaders, ITableRow } from '../UI/table/CustomTable';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { actionsAdminTest, selectorAdminTest } from '../../store/slices/admin-test';

const tableHeaders: ITableHeaders[] = [
   { label: '', rowKey: 'title' },
   { label: '', rowKey: 'actions' }
];

const MainAdmin = () => {
   const { push } = useRouter();
   const { test } = useAppSelector(selectorAdminTest);
   const dispatch = useAppDispatch();

   const handleAddTest = () => {
      dispatch(actionsAdminTest.createTest());
      push('/admin/tests/add');
   };

   const data: ITableRow[] = useMemo(
      () =>
         test.map((item) => ({
            title: (
               <Typography color="#4C4859" variant="body2">
                  {item.title}
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
         })),
      [test]
   );

   return (
      <CustomTable
         head={
            <Stack direction="row" justifyContent="flex-end">
               <Button variant="come" startIcon={<AddIcon />} onClick={handleAddTest}>
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

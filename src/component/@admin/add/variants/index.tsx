import React, { useMemo } from 'react';
import { Button, Divider, IconButton, Stack, Switch, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomTable, { ITableHeaders, ITableRow } from '../../../UI/table/CustomTable';

const tableHeaders: ITableHeaders[] = [
   { label: '#', rowKey: 'index' },
   { label: 'Name', rowKey: 'name' },
   { label: 'Duration', rowKey: 'duration' },
   { label: 'Question Type', rowKey: 'type' },
   { label: '', rowKey: 'actions' }
];

const MainAdminTestAddVariants = () => {
   const tableRows: ITableRow[] = useMemo(
      () => [
         {
            index: 1,
            name: 'Select the real Englisg word in the list...',
            duration: '1 min',
            type: 'Select real English word',
            actions: (
               <Stack direction="row" alignItems="center" justifyContent="flex-end" gap={3} py={2}>
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
      <>
         <CustomTable
            tableHeaders={tableHeaders}
            tableRows={tableRows}
            head={
               <Stack>
                  <Stack py="22px">
                     <Typography variant="body3">
                        Title: <span>Take a free practice test and estimate your score</span>
                     </Typography>
                     <Typography variant="body3">
                        Short Description: <span> Select real English words </span>
                     </Typography>
                     <Typography variant="body3">
                        Duration: <span>15:00</span>
                     </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="flex-end" py="22px">
                     <Button variant="contained" startIcon={<AddIcon />}>
                        ADD MORE QUESTIONS{' '}
                     </Button>
                  </Stack>
                  <Divider />
               </Stack>
            }
            footer={
               <Stack direction="row" justifyContent="flex-end" alignItems="flex-end">
                  <Button variant="login">GO BACK</Button>
               </Stack>
            }
         />
      </>
   );
};

export default MainAdminTestAddVariants;

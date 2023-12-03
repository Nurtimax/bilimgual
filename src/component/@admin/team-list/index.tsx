import { Avatar, Button, IconButton, Stack } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useRouter } from 'next/router';
import Link from 'next/link';

import CustomTable, { ITableHeaders } from '../../UI/table/CustomTable';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
   IRemoveOurTeamByIdThunk,
   getOurTeamThunk,
   removeOurTeamByIdThunk,
   selectorOurTeam
} from '../../../store/slices/our-team';
import CircularLoading from '../../loading';
import ImageList from '../../@layout/our-team/ImageList';

const tableHeaders: ITableHeaders[] = [
   { label: 'avatar', rowKey: 'avatar', tableProps: { sx: { width: '10%' } } },
   { label: 'Full Name', rowKey: 'fullName', tableProps: { sx: { width: '20%' } } },
   { label: 'email', rowKey: 'email', tableProps: { sx: { width: '20%' } } },
   { label: 'position', rowKey: 'position', tableProps: { sx: { width: '20%' } } },
   { label: 'company', rowKey: 'company', tableProps: { sx: { width: '10%' } } },
   { label: 'city', rowKey: 'city', tableProps: { sx: { width: '10%' } } },
   {
      label: 'edit',
      rowKey: 'edit',
      tableProps: { sx: { width: '5%' } }
   },
   {
      label: 'Delete',
      rowKey: 'delete',
      tableProps: { sx: { width: '5%' } }
   }
];

const MainTeamList = () => {
   const [view, setView] = React.useState('list');
   const { push } = useRouter();

   const handleChange = (_event: React.MouseEvent<HTMLElement>, nextView: string) => {
      setView(nextView);
   };

   const dispatch = useAppDispatch();

   const { loading, teams } = useAppSelector(selectorOurTeam);

   useEffect(() => {
      dispatch(getOurTeamThunk());
   }, [dispatch]);

   const handleEdit = useCallback(
      (id: string) => {
         push(`team/${id}`);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
   );

   const handleRemove = useCallback(
      (thunkProps: IRemoveOurTeamByIdThunk) => {
         dispatch(removeOurTeamByIdThunk(thunkProps));
      },
      [dispatch]
   );

   const tableRows = useMemo(
      () =>
         teams.map((team) => ({
            avatar: <Avatar alt="Remy Sharp" src={team.staticImage} />,
            fullName: team.fullName,
            email: team.email,
            position: team.position,
            company: team.company,
            city: team.city,
            edit: (
               <IconButton onClick={() => handleEdit(team.id)}>
                  <ManageAccountsIcon />
               </IconButton>
            ),
            delete: (
               <IconButton onClick={() => handleRemove({ fullName: team.fullName, id: team.id })} color="error">
                  <DeleteIcon />
               </IconButton>
            )
         })),
      [handleEdit, handleRemove, teams]
   );

   if (!teams.length) {
      return (
         <Stack direction="row" alignItems="center" gap={2}>
            <Link href="team/create">
               <Button variant="come">create team</Button>
            </Link>
         </Stack>
      );
   }

   return (
      <>
         {loading && <CircularLoading open />}

         <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
            <Link href="team/create" style={{ justifySelf: 'flex-start' }}>
               <Button variant="come">create team</Button>
            </Link>

            <ToggleButtonGroup
               orientation="horizontal"
               value={view}
               exclusive
               onChange={handleChange}
               sx={{ justifyContent: 'flex-end', py: 3 }}
            >
               <ToggleButton value="list" aria-label="list">
                  <ViewListIcon />
               </ToggleButton>
               <ToggleButton value="module" aria-label="module">
                  <ViewModuleIcon />
               </ToggleButton>
            </ToggleButtonGroup>
         </Stack>

         {view === 'list' ? (
            <CustomTable tableHeaders={tableHeaders} tableRows={tableRows} />
         ) : (
            <ImageList teams={teams} />
         )}
      </>
   );
};

export default MainTeamList;

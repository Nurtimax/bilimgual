import React from 'react';
import { Stack } from '@mui/material';

import TeamImageCard from '../../UI/team-image-card/TeamImageCard';
import { useAppSelector } from '../../../store/hooks';
import { adminCreateTeamSelector } from '../../../store/helpers/create-team';

const UserResult = () => {
   const { forms } = useAppSelector(adminCreateTeamSelector);

   return (
      <Stack justifySelf="center">
         <TeamImageCard {...forms} />
      </Stack>
   );
};

export default UserResult;

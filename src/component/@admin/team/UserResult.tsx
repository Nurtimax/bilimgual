import React, { memo } from 'react';
import { Stack } from '@mui/material';

import TeamImageCard from '../../UI/team-image-card/TeamImageCard';
import { useAppSelector } from '../../../store/hooks';
import { selectorOurTeam } from '../../../store/slices/our-team';

const UserResult = memo(() => {
   const { team } = useAppSelector(selectorOurTeam);

   return (
      <Stack justifySelf="center">
         <TeamImageCard {...team} />
      </Stack>
   );
});

export default UserResult;

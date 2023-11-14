import React from 'react';

import TeamImageCard from '../../UI/team-image-card/TeamImageCard';
import { useAppSelector } from '../../../store/hooks';
import { adminCreateTeamSelector } from '../../../store/helpers/create-team';

const UserResult = () => {
   const { forms } = useAppSelector(adminCreateTeamSelector);

   return <TeamImageCard {...forms} />;
};

export default UserResult;

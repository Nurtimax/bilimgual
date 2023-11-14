import { Grid } from '@mui/material';
import React, { useMemo } from 'react';

import { useAppSelector } from '../../../store/hooks';
import { adminCreateTeamSelector } from '../../../store/helpers/create-team';

import Forms from './Forms';
import UserResult from './UserResult';

const CreateUserForms = () => {
   const { isByIdForms, forms } = useAppSelector(adminCreateTeamSelector);

   const renderContent = useMemo(() => {
      if (isByIdForms) {
         return <Forms initialValues={forms} />;
      }
      return <Forms />;
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isByIdForms]);

   return (
      <Grid container spacing={2}>
         <Grid item xs={8}>
            {renderContent}
         </Grid>
         <Grid item xs={4}>
            <UserResult />
         </Grid>
      </Grid>
   );
};

export default CreateUserForms;

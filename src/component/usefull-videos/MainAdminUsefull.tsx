import { Box, Grid } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';

import ChangeVideoCard, { IVideoCardProps } from './ChangeVideoCard';

const MainAdminUsefull = () => {
   const { values } = useFormik<IVideoCardProps[]>({
      initialValues: [{ id: 1, duration: 5, title: '', video: '' }],
      onSubmit: () => {}
   });

   return (
      <Box pb={5}>
         <Grid container minHeight={350} spacing={8} pt={5}>
            {values.map((el) => (
               <Grid item xs={4} key={el.id}>
                  <ChangeVideoCard {...el} />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
};

export default MainAdminUsefull;

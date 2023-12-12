import React from 'react';
import { Button, FormLabel, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

import Card from '../../UI/card';

export interface IAdminTestAddValues {
   title: string;
   shortDescription: string;
}

const MainAdminTestAdd = () => {
   const { values, errors, handleChange } = useFormik<IAdminTestAddValues>({
      initialValues: { title: '', shortDescription: '' },
      onSubmit: () => {}
   });

   return (
      <Card
         cardProps={{ sx: { width: '80%', margin: '0 auto', px: '80px', py: '50px', borderRadius: '20px' } }}
         contentProps={{
            sx: {
               display: 'grid',
               gap: '24px'
            },
            children: (
               <>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }} error={!!errors.title}>
                        Title
                     </FormLabel>
                     <TextField
                        fullWidth
                        id="title"
                        name="title"
                        onChange={handleChange}
                        value={values.title}
                        error={!!errors.title}
                        helperText={errors.title && errors.title}
                     />
                  </Stack>
                  <Stack gap={1}>
                     <FormLabel sx={{ color: '#4B4759' }} error={!!errors.shortDescription}>
                        Short Description
                     </FormLabel>
                     <TextField
                        fullWidth
                        id="shortDescription"
                        name="shortDescription"
                        onChange={handleChange}
                        value={values.shortDescription}
                        error={!!errors.shortDescription}
                        helperText={errors.shortDescription && errors.shortDescription}
                     />
                  </Stack>
               </>
            )
         }}
         actionProps={{
            children: (
               <Stack direction="row" gap={2} justifyContent="flex-end" width="100%">
                  <Button variant="login">GO BACK</Button>
                  <Button variant="contained" color="success">
                     SAVE
                  </Button>
                  {values.shortDescription && values.title && (
                     <Link href="/admin/tests/add/variants">
                        <Button variant="contained" startIcon={<AddIcon />}>
                           ADD QUESTIONS
                        </Button>
                     </Link>
                  )}
               </Stack>
            )
         }}
      />
   );
};

export default MainAdminTestAdd;

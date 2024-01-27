import {
   Box,
   Button,
   Checkbox,
   Dialog,
   DialogActions,
   DialogContent,
   FormControlLabel,
   IconButton,
   Paper,
   Stack,
   TextField,
   styled
} from '@mui/material';
import { useFormik } from 'formik';
import React, { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

interface IAdminTestSelectWords {
   id?: string;
   title?: string;
}

interface IAdminTestSelectFormikInitialValues {
   words: IAdminTestSelectWords[];
   isWrite?: boolean;
}

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: '0.5rem 1.2rem',
   textAlign: 'center',
   color: '#4C4859',
   fontWeight: 900,
   fontFamily: 'Gudea',
   fontSize: 16,
   border: '1.5px solid #4C4859',
   borderRadius: 8
}));

const AdminTestSelect = memo(() => {
   const { values, setFieldValue } = useFormik<IAdminTestSelectFormikInitialValues>({
      initialValues: {
         words: [],
         isWrite: false
      },
      onSubmit: () => {}
   });

   const handleToggleOptions = () => {
      setFieldValue('isWrite', !values.isWrite);
   };

   return (
      <Stack width="100%">
         <Stack direction="row" justifyContent="space-between" pb={3}>
            <Dialog onClose={handleToggleOptions} open={!!values.isWrite} fullWidth maxWidth="md">
               <Stack justifyContent="flex-end" direction="row" py={2.5} px={4}>
                  <IconButton
                     aria-label="close"
                     onClick={handleToggleOptions}
                     sx={{
                        color: (theme) => theme.palette.grey[500]
                     }}
                  >
                     <HighlightOffIcon />
                  </IconButton>
               </Stack>
               <DialogContent
                  sx={{ display: 'grid', placeItems: 'flex-start', gap: 2.5, px: 7.5, py: 3.25, pb: 10.25 }}
               >
                  <TextField fullWidth label="title" value="Select real English words" />

                  <FormControlLabel
                     value="start"
                     control={<Checkbox color="success" sx={{ height: 22, width: 22 }} />}
                     label="Is true option?"
                     sx={{ fontSize: 16, m: 0 }}
                     disableTypography
                     labelPlacement="start"
                  />
               </DialogContent>
               <DialogActions sx={{ px: 7.5, py: 3.25, bgcolor: '#F0F1F1' }}>
                  <Button variant="login" onClick={handleToggleOptions}>
                     go back
                  </Button>
                  <Button variant="contained" color="success">
                     save
                  </Button>
               </DialogActions>
            </Dialog>
            <Button variant="contained" startIcon={<AddIcon />}>
               add options
            </Button>
         </Stack>
         <Box>
            {values.words?.map((widget) => (
               <Item key={widget.id}>{widget.title}</Item>
            ))}
         </Box>
         <Stack direction="row" justifyContent="flex-end" pt={3} gap={3}>
            <Button variant="login">go back</Button>
            <Button variant="contained" color="success" onClick={handleToggleOptions}>
               save
            </Button>
         </Stack>
      </Stack>
   );
});

export default AdminTestSelect;

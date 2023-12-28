import {
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   Paper,
   Stack,
   TextField,
   styled
} from '@mui/material';
import { useFormik } from 'formik';
import React, { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';

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
            <Stack>
               <Dialog onClose={handleToggleOptions} open={!!values.isWrite}>
                  <DialogTitle>Title</DialogTitle>
                  <DialogContent>
                     <TextField />
                  </DialogContent>
                  <DialogActions>
                     <Button variant="login" onClick={handleToggleOptions}>
                        go back
                     </Button>
                     <Button variant="contained" color="success">
                        save
                     </Button>
                  </DialogActions>
               </Dialog>
            </Stack>
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

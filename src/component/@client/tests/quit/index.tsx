import { Button, Dialog, DialogActions, DialogTitle, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const MainClientQuitTest = () => {
   const { back } = useRouter();
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const handleQuitTest = () => {
      back();
      handleClose();
   };

   return (
      <Stack direction="row" justifyContent="flex-end" p={2} pb={5}>
         <Button variant="login" onClick={handleClickOpen}>
            quit
         </Button>

         <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { px: 4, py: 4.5 } }}>
            <DialogTitle sx={{ fontWeight: 400, fontSize: 16, color: '#4C4859' }}>
               Are you sure you want to leave your practice test?
            </DialogTitle>
            <DialogActions sx={{ justifyContent: 'center', gap: 3 }}>
               <Button variant="outlined" onClick={handleQuitTest}>
                  QUIT TEST
               </Button>
               <Button variant="contained" onClick={handleClose}>
                  CONTINUE TEST
               </Button>
            </DialogActions>
         </Dialog>
      </Stack>
   );
};

export default MainClientQuitTest;

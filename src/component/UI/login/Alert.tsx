import React, { FC, memo } from 'react';
import { Alert, AlertTitle, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ILoginAlert {
   message?: string;
   errorName?: string;
}

const LoginAlert: FC<ILoginAlert> = memo(({ message, errorName }) => {
   const [open, setOpen] = React.useState(true);

   return (
      <Collapse in={open}>
         <Alert
            severity="error"
            color="error"
            action={
               <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  <CloseIcon fontSize="inherit" />
               </IconButton>
            }
         >
            <AlertTitle>{errorName}</AlertTitle>
            {message}
         </Alert>
      </Collapse>
   );
});

export default LoginAlert;

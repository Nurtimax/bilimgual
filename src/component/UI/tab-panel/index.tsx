import * as React from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps {
   children?: React.ReactNode;
   index: number | string;
   value: number | string;
   style?: React.CSSProperties;
}

export function CustomTabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
      </div>
   );
}

import { FormLabel, Stack } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface FormFieldProps {
   label: string;
   input: ReactNode;
}

const FormField: FC<FormFieldProps> = ({ label, input }) => (
   <Stack gap={1}>
      <FormLabel id={`demo-simple-select-helper-label-${label}`}>{label}</FormLabel>
      {input}
   </Stack>
);

export default FormField;

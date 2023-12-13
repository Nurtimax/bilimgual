import { FormControl, FormLabel, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { TestType } from '../../../../@client/tests/TestByType';

import TimePickerHour from './UI/Time';
import SelectType, { ISelectItem } from './UI/Select';

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

const selectItems: ISelectItem[] = [
   { id: 1, title: 'Select real English words', type: 'select' },
   { id: 2, title: 'Listen and select word', type: 'listenAndSelect' },
   { id: 3, title: 'Type what you hear', type: 'descriptionImage' },
   { id: 2, title: 'Record saying statement', type: 'recordSaying' },
   { id: 2, title: 'Respond in at least N words', type: 'respondWords' }
];

// Reusable component for controlled time picker

const VariantsSelectFields = () => {
   const [type, setType] = React.useState<TestType | ''>('');
   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

   const handleChange = (event: SelectChangeEvent) => {
      setType(event.target.value as TestType);
   };

   return (
      <Stack>
         <Stack gap={3} display="grid" gridTemplateColumns="7fr 1fr" alignItems="flex-end" py={2}>
            <FormField label="Title" input={<TextField />} />
            <FormField label="Duration (in minutes)" input={<TimePickerHour value={value} onChange={setValue} />} />
         </Stack>
         <Stack>
            <FormControl sx={{ minWidth: 120 }}>
               <FormField
                  label="Type"
                  input={<SelectType value={String(type)} onChange={handleChange} items={selectItems} />}
               />
            </FormControl>
         </Stack>
      </Stack>
   );
};

export default VariantsSelectFields;

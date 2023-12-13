import { FormControl, FormLabel, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import dayjs from 'dayjs';

import { TestType } from '../../../../@client/tests/TestByType';

import TimePickerHour from './UI/Time';
import SelectType, { ISelectItem } from './UI/Select';

interface FormFieldProps {
   label: string;
   input: ReactNode;
}

interface IVariantsSelectFieldsProps {
   handleChangeType: (event: SelectChangeEvent) => void;
   typeValue: TestType | '';
   duration: dayjs.Dayjs | null;
   handleChangeDuration: (value: dayjs.Dayjs | null) => void;
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

const VariantsSelectFields: FC<IVariantsSelectFieldsProps> = ({
   handleChangeType,
   typeValue,
   duration,
   handleChangeDuration
}) => {
   return (
      <Stack>
         <Stack gap={3} display="grid" gridTemplateColumns="6fr 1fr" alignItems="flex-end" py={2}>
            <FormField label="Title" input={<TextField />} />
            <FormField
               label="Duration (in minutes)"
               input={<TimePickerHour value={duration} onChange={handleChangeDuration} />}
            />
         </Stack>
         <Stack>
            <FormControl sx={{ minWidth: 120 }}>
               <FormField
                  label="Type"
                  input={<SelectType value={String(typeValue)} onChange={handleChangeType} items={selectItems} />}
               />
            </FormControl>
         </Stack>
      </Stack>
   );
};

export default VariantsSelectFields;

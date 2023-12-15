import { FormControl, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { FC } from 'react';
import dayjs from 'dayjs';
import { FormikErrors } from 'formik';

import { TestType } from '../../../../TestByType';

import TimePickerHour from './UI/Time';
import SelectType, { ISelectItem } from './UI/Select';
import FormField from './UI/FormField';

import { IFormikInitialValues } from '.';

interface IVariantsSelectFieldsProps {
   handleChangeType: (event: SelectChangeEvent) => void;
   typeValue: TestType | '';
   duration: dayjs.Dayjs | null;
   handleChangeDuration: (value: dayjs.Dayjs | null) => void;
   values: IFormikInitialValues;
   errors: FormikErrors<IFormikInitialValues>;
   handleChange: (e: React.ChangeEvent<unknown>) => void;
}

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
   handleChangeDuration,
   values,
   errors,
   handleChange
}) => {
   return (
      <Stack>
         <Stack gap={3} display="grid" gridTemplateColumns="6fr 1fr" alignItems="flex-end" py={2}>
            <FormField
               label="Title"
               input={
                  <TextField
                     name="title"
                     value={values.fields.title}
                     error={!!errors.fields?.title}
                     helperText={errors.fields?.title}
                     onChange={handleChange}
                  />
               }
            />
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

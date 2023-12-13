import { FormHelperText, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import React, { FC, ReactNode } from 'react';

import { TestType } from '../../../../../@client/tests/TestByType';

export interface ISelectItem {
   id: number;
   type: TestType;
   title: string;
}

interface SelectControlledProps {
   value: string;
   onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
   items: ISelectItem[];
   helperText?: string;
}

const SelectType: FC<SelectControlledProps> = ({ value, onChange, items, helperText }) => (
   <>
      <Select
         labelId={`demo-simple-select-helper-label-Type`}
         id="demo-simple-select-helper"
         value={value}
         input={<OutlinedInput sx={{ border: '2px solid #bdbdbd' }} />}
         onChange={onChange}
      >
         <MenuItem value="">
            <em>None</em>
         </MenuItem>
         {items.map((item) => (
            <MenuItem key={item.id} value={item.type}>
               {item.title}
            </MenuItem>
         ))}
      </Select>
      {helperText && <FormHelperText>With label + helper text</FormHelperText>}
   </>
);

export default SelectType;

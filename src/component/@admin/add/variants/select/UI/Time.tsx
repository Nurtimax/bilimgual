import React, { FC } from 'react';
import { TextField } from '@mui/material';

interface TimePickerControlledProps {
   value: number | string;
   onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const TimePickerHour: FC<TimePickerControlledProps> = ({ value, onChange }) => (
   <TextField value={value} onChange={onChange} />
);

export default TimePickerHour;

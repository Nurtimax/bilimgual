import React, { FC } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

interface TimePickerControlledProps {
   value: dayjs.Dayjs | null;
   onChange: (newValue: dayjs.Dayjs | null | null) => void;
}

const TimePickerHour: FC<TimePickerControlledProps> = ({ value, onChange }) => (
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker label="Controlled picker" value={value} onChange={onChange} />
   </LocalizationProvider>
);

export default TimePickerHour;

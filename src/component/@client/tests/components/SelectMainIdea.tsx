import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

import Card from '../../../UI/card';

import { TEXT } from './HighlightsAnswer';

const dummy = [
   { id: 1, title: 'There are many variations of passages of lorem ipsum available, but the majority have.' },
   { id: 2, title: 'There are many variations of passages of lorem ipsum available, but the majority have.' },
   {
      id: 3,
      title: 'There are many variations of passages of lorem ipsum available, but the majority have sedd ut perspiciatis unde omnis iste natus error.'
   },
   { id: 4, title: 'There are many variations of passages of lorem ipsum available, but the majority have.' }
];

const SelectMainIdea = () => {
   const [value, setValue] = React.useState('female');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
   };

   return (
      <Card
         headerProps={{
            title: 'Write on more sentences that describe the image',
            titleTypographyProps: { textAlign: 'center' }
         }}
         contentProps={{
            children: (
               <>
                  <Box sx={{ border: '1.5px solid #dfdfdf', borderRadius: 2 }}>
                     <Typography variant="h5" sx={{ border: '1.5px solid #dfdfdf', borderRadius: 2, px: 2 }}>
                        Passage
                     </Typography>
                     <Typography variant="body2" p={2}>
                        {TEXT}
                     </Typography>
                  </Box>
                  <FormControl>
                     <FormLabel id="demo-radio-buttons-group-label">
                        <Typography py={1} textAlign="center" variant="h4">
                           Select the best title for the passage
                        </Typography>
                     </FormLabel>
                     <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={1}
                        name="radio-buttons-group"
                        sx={{ display: 'grid', gap: 2 }}
                        onChange={handleChange}
                        value={value}
                     >
                        {dummy.map((el) => (
                           <FormControlLabel
                              key={el.id}
                              sx={{
                                 border: '1px solid #dfdfdf',
                                 borderRadius: 3,
                                 ...(el.id === +value && { background: '#cbd2e0', border: '1px solid #2655cd' }),
                                 transition: 'background 0.3s'
                              }}
                              value={el.id}
                              control={<Radio />}
                              label={
                                 <Typography variant="body2" p={1}>
                                    {el.title}
                                 </Typography>
                              }
                           />
                        ))}
                     </RadioGroup>
                  </FormControl>
               </>
            )
         }}
      />
   );
};

export default SelectMainIdea;

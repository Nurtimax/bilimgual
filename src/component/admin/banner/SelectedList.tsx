import { Card, CardContent, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { ISlidersInitialStateData, actionSliders, putSlidersDataThunk } from '../../../store/slices/sliders';
import { useAppDispatch } from '../../../store/hooks';
import truncate from '../../../utils/helpers/text';

interface ISelectedListProps {
   list?: ISlidersInitialStateData[];
   selectedValue: ISlidersInitialStateData | null;
}

const SelectedList: FC<ISelectedListProps> = ({ list, selectedValue }) => {
   const dispatch = useAppDispatch();

   const handleSelected = (id: number) => {
      dispatch(actionSliders.selectValuesWithId({ id }));
   };

   const handleRemove = (id: number) => {
      const deletedList = list?.filter((el) => el.id !== id);

      if (deletedList) {
         dispatch(putSlidersDataThunk(deletedList));
      }
   };

   return (
      <Card>
         <CardContent>
            <List dense>
               {list?.map((item) => (
                  <ListItemButton
                     key={item.id}
                     selected={selectedValue?.id === item.id}
                     onClick={() => handleSelected(item.id)}
                  >
                     <ListItemText
                        primary={truncate(item.title || 'Enter title', 10)}
                        primaryTypographyProps={{ fontSize: 20, lineHeight: 2 }}
                        secondary={truncate(item.subTitle || 'Enter sub title', 18)}
                        secondaryTypographyProps={{ fontSize: 12, lineHeight: 1 }}
                     />
                     <ListItemIcon sx={{ justifyContent: 'flex-end' }} onClick={() => handleRemove(item.id)}>
                        <DeleteIcon color="error" />
                     </ListItemIcon>
                  </ListItemButton>
               ))}
            </List>
         </CardContent>
      </Card>
   );
};

export default SelectedList;

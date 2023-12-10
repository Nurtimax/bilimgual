import { Box, Grid, Paper, styled } from '@mui/material';
import React, { useState } from 'react';

import Card from '../../../UI/card';

interface ItemObject {
   id: number;
   title: string;
}

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: '0.5rem 1.2rem',
   textAlign: 'center',
   color: '#4C4859',
   fontWeight: 900,
   fontFamily: 'Gudea',
   fontSize: 16,
   border: '1.5px solid #4C4859',
   borderRadius: 8
}));

const array: ItemObject[] = [
   { id: 1, title: 'twall' },
   { id: 2, title: 'dreesey' },
   { id: 3, title: 'jelance' },
   { id: 4, title: 'cability' },
   { id: 5, title: 'advantage' },
   { id: 6, title: 'port' },
   { id: 7, title: 'ecorated' },
   { id: 8, title: 'beathing' },
   { id: 9, title: 'distinge' },
   { id: 10, title: 'soap' },
   { id: 11, title: 'vivory' },
   { id: 12, title: 'internate' },
   { id: 13, title: 'outee' },
   { id: 14, title: 'uncove' },
   { id: 15, title: 'fold' },
   { id: 16, title: 'beer' },
   { id: 17, title: 'filend' },
   { id: 18, title: 'living' }
];

const WIDGET_TYPE = 'widgetType';

const TestSelect = () => {
   const [widgets, setWidgets] = useState<ItemObject[]>([]);
   const [items, setItems] = useState<ItemObject[]>(array);

   const handleRemoveItem = (id: number) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
   };

   const handleRemoveWidget = (id: number) => {
      setWidgets((prev) => prev.filter((item) => item.id !== id));
   };

   const handleOnDrag = (e: React.DragEvent, widgetType: ItemObject) => {
      e.dataTransfer.setData(WIDGET_TYPE, JSON.stringify(widgetType));
   };

   const handleOnDrop = (e: React.DragEvent) => {
      const widgetType = JSON?.parse(e.dataTransfer.getData(WIDGET_TYPE) || '{}') as ItemObject;

      if (widgetType) {
         handleRemoveItem(widgetType.id);
         setWidgets((prev) => [...prev, widgetType]);
      }
   };

   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
   };

   const handleClickItem = (obj: ItemObject) => {
      handleRemoveItem(obj.id);
      setWidgets((prev) => [...prev, obj]);
   };

   const handleClickSelectedItem = (obj: ItemObject) => {
      handleRemoveWidget(obj.id);
      setItems((prev) => [...prev, obj]);
   };

   return (
      <Card
         headerProps={{
            title: 'Select the real English words in this list',
            titleTypographyProps: { textAlign: 'center' }
         }}
         contentProps={{
            children: (
               <Grid container>
                  <Grid item>
                     {items.map((item) => (
                        <Item
                           draggable
                           key={item.id}
                           onClick={() => handleClickItem(item)}
                           onDragStart={(e) => handleOnDrag(e, item)}
                        >
                           {item.title}
                        </Item>
                     ))}
                  </Grid>
                  <Grid item>
                     <Box
                        sx={{
                           border: '1px dashed',
                           minHeight: 150,
                           minWidth: 400,
                           width: '30%',
                           borderRadius: 2,
                           display: 'flex',
                           flexWrap: 'wrap',
                           alignItems: 'baseline',
                           gap: 1
                        }}
                        onDrop={handleOnDrop}
                        onDragOver={handleDragOver}
                     >
                        {widgets.map((widget) => (
                           <Item key={widget.id} onClick={() => handleClickSelectedItem(widget)}>
                              {widget.title}
                           </Item>
                        ))}
                     </Box>
                  </Grid>
               </Grid>
            )
         }}
      />
   );
};

export default TestSelect;

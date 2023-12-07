import { List, ListItem, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';

const WIDGET_TYPE = 'widgetType';

const array = ['Widgget A', 'Widgget B', 'Widgget C', 'Widgget D'];

const TestSelect = () => {
   const [widgets, setWidgets] = useState<string[]>([]);

   const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
      e.dataTransfer.setData(WIDGET_TYPE, widgetType);
   };

   const handleOnDrop = (e: React.DragEvent) => {
      const widgetType = e.dataTransfer.getData(WIDGET_TYPE) as string;

      setWidgets((prev) => [...prev, widgetType]);
   };

   const handleDragOvver = (e: React.DragEvent) => {
      e.preventDefault();
   };

   return (
      <Stack direction="row" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={5}>
         <List>
            {array.map((item) => (
               <ListItem key={item} draggable onDragStart={(e) => handleOnDrag(e, item)}>
                  {item}
               </ListItem>
            ))}
         </List>
         <Paper
            onDrop={handleOnDrop}
            onDragOver={handleDragOvver}
            elevation={3}
            sx={{ border: '1px dashed', minHeight: 300, minWidth: 300 }}
         >
            <List>
               {widgets.map((item) => (
                  <ListItem key={item} draggable onDragStart={(e) => handleOnDrag(e, item)}>
                     {item}
                  </ListItem>
               ))}
            </List>
         </Paper>
      </Stack>
   );
};

export default TestSelect;

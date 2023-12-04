import { List, ListItem, Stack } from '@mui/material';
import React, { useState } from 'react';

// const WIDGET_TYPE = 'widgetType';

const array = ['Widgget A', 'Widgget B', 'Widgget C', 'Widgget D'];

const DragAndDropExamples = () => {
   const [widgets, setWidgets] = useState<string[]>(array);
   const [currentWidget, setCurrentWidget] = useState<string>('');

   const dragStartHandler = (e: React.DragEvent, widget: string) => {
      console.log(widget);
      setCurrentWidget(widget);
   };

   const dragEndHandler = (e: React.DragEvent) => {
      e.target.style.background = 'inherit';
   };

   const dragOverHandler = (e: React.DragEvent) => {
      e.preventDefault();
      e.target.style.background = 'red';
   };

   const dropHandler = (e: React.DragEvent, widget: string) => {
      e.preventDefault();
      console.log(widget);

      setWidgets((prev) =>
         prev.map((wid) => {
            if (wid === widget) {
               return currentWidget;
            }
            if (wid === currentWidget) {
               return widget;
            }
            return wid;
         })
      );

      e.target.style.background = 'inherit';
   };

   return (
      <Stack direction="row" display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={5}>
         <List>
            {widgets.map((item) => (
               <ListItem
                  key={item}
                  draggable
                  onDragStart={(e) => dragStartHandler(e, item)}
                  onDragLeave={() => {}}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDrop={(e) => dropHandler(e, item)}
               >
                  {item}
               </ListItem>
            ))}
         </List>
      </Stack>
   );
};

export default DragAndDropExamples;

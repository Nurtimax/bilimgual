import {
   Box,
   Button,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   Divider,
   LinearProgress,
   Paper,
   Typography,
   styled
} from '@mui/material';
import React, { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: '0.5rem 1.2rem',
   textAlign: 'center',
   color: '#4C4859',
   fontWeight: 900,
   fontFamily: 'Gudea',
   fontSize: 16,
   justifySelf: 'stretch',
   border: '1.5px solid #4C4859',
   borderRadius: 8
}));

const array = [
   'twall',
   'dreesey',
   'jelance',
   'cability',
   'advantage',
   'port',
   'ecorated',
   'beathing',
   'distinge',
   'soap',
   'vivory',
   'internate',
   'outee',
   'uncove',
   'fold',
   'beer',
   'filend',
   'living',
   'living',
   'living',
   'living',
   'living',
   'living',
   'living',
   'living'
];

const WIDGET_TYPE = 'widgetType';

const MainClientTest = () => {
   const [widgets, setWidgets] = useState<string[]>([]);

   const handleOnDrag = (e: React.DragEvent, widgetType: string) => {
      e.dataTransfer.setData(WIDGET_TYPE, widgetType);
   };

   const handleOnDrop = (e: React.DragEvent) => {
      const widgetType = e.dataTransfer.getData(WIDGET_TYPE) as string;

      setWidgets((prev) => [...prev, widgetType]);
   };

   const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
   };

   return (
      <Box>
         <Card sx={{ borderRadius: 5 }}>
            <CardContent sx={{ p: 3 }}>
               <Typography variant="h3">0:21</Typography>
               <LinearProgress variant="determinate" value={10} sx={{ height: 10, borderRadius: 5 }} />
            </CardContent>

            <CardHeader
               title="Select the real English words in this list"
               titleTypographyProps={{ textAlign: 'center' }}
            />

            <CardContent sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 3, justifyContent: 'flex-start' }}>
               {array.map((item) => (
                  <Item draggable key={item} onDragStart={(e) => handleOnDrag(e, item)}>
                     {item}
                  </Item>
               ))}
            </CardContent>

            <CardContent sx={{ p: 3, justifyContent: 'flex-end', display: 'flex' }}>
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
                     <Item draggable key={widget} onDragStart={(e) => handleOnDrag(e, widget)}>
                        {widget}
                     </Item>
                  ))}
               </Box>
            </CardContent>

            <Divider />

            <CardActions sx={{ justifyContent: 'flex-end', p: 3 }}>
               <Button variant="come">Next</Button>
            </CardActions>
         </Card>
      </Box>
   );
};

export default MainClientTest;

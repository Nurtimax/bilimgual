import React, { FC } from 'react';
import { Button, LinearProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import Card from '../../../UI/card';
import { CustomTabPanel } from '../../../UI/tab-panel';
import TestByType, { TestType } from '../../../TestByType';

export interface ITest {
   type: TestType;
   id: number;
}

interface IMainTestProps {
   disabledLastItem?: boolean;
   disabledFirstItem?: boolean;
   handleNextTestIndex: () => void;
   handlePrevTestIndex: () => void;
   valuesList: ITest[];
   selected: ITest;
}

const normalise = (array: ITest[], value: number) => {
   const MIN = Math.min(...array.map((el) => el.id));
   const MAX = Math.max(...array.map((el) => el.id));

   const result = ((value - MIN) * 100) / (MAX - MIN);

   return result;
};

const MainTest: FC<IMainTestProps> = ({
   disabledFirstItem,
   disabledLastItem,
   handleNextTestIndex,
   handlePrevTestIndex,
   valuesList,
   selected
}) => {
   const { replace, query } = useRouter();

   const handleSubmitDoneTest = () => replace(`/tests/${query.id}/completed`);

   return (
      <Card
         contentProps={{
            children: (
               <>
                  {valuesList.map((el) => (
                     <CustomTabPanel style={{ minHeight: 600 }} key={el.id} index={el.id} value={selected.id}>
                        <TestByType variants="USER" type={el.type} />
                     </CustomTabPanel>
                  ))}
               </>
            )
         }}
         headerProps={{
            title: (
               <>
                  <Typography variant="h3">0:21</Typography>
                  <LinearProgress
                     variant="determinate"
                     value={normalise(valuesList, selected.id)}
                     sx={{ height: 10, borderRadius: 5 }}
                  />
               </>
            )
         }}
         actionProps={{
            children: (
               <>
                  <Button variant="come" onClick={handlePrevTestIndex} disabled={disabledFirstItem}>
                     Prev
                  </Button>
                  {!disabledLastItem ? (
                     <Button variant="come" onClick={handleNextTestIndex}>
                        Next
                     </Button>
                  ) : (
                     <Button variant="come" onClick={handleSubmitDoneTest}>
                        Completed
                     </Button>
                  )}
               </>
            )
         }}
      />
   );
};

export default MainTest;

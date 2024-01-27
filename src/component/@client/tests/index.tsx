import React from 'react';
import { useFormik } from 'formik';

import { checkArray } from '../../../utils/helpers/array';

import MainTest, { ITest } from './components/MainTest';

interface IUseFormikInitialValues {
   selected: ITest;
   list: ITest[];
}

const MainClientTestItem = () => {
   const { values, setValues } = useFormik<IUseFormikInitialValues>({
      initialValues: {
         selected: { id: 1, type: 'highlight' },
         list: [
            { id: 1, type: 'highlight' },
            { id: 2, type: 'select' },
            { id: 3, type: 'descriptionImage' },
            { id: 4, type: 'mainIdea' },
            { id: 5, type: 'listenAndSelect' },
            { id: 6, type: 'recordSaying' },
            { id: 7, type: 'practice' },
            { id: 8, type: 'respondWords' },
            { id: 9, type: 'typeWhatHear' }
         ]
      },
      onSubmit: () => {}
   });

   const handleNextTestIndex = () => {
      setValues((prev) => {
         const newSelected = prev.list.findIndex((el) => el.id === prev.selected.id);

         if (newSelected !== -1) {
            return {
               ...prev,
               selected: prev.list[newSelected + 1]
            };
         }

         return prev;
      });
   };

   const handlePrevTestIndex = () => {
      setValues((prev) => {
         const newSelected = prev.list.findIndex((el) => el.id === prev.selected.id);

         if (newSelected !== -1) {
            return {
               ...prev,
               selected: prev.list[newSelected - 1]
            };
         }

         return prev;
      });
   };

   const valuesList = checkArray(values.list);
   const firstListItem = valuesList?.[0];
   const lastListItem = valuesList?.[valuesList.length - 1];
   const disabledFirstItem = values.selected.id === firstListItem.id;
   const disabledLastItem = values.selected.id === lastListItem?.id;

   return (
      <MainTest
         handleNextTestIndex={handleNextTestIndex}
         handlePrevTestIndex={handlePrevTestIndex}
         disabledFirstItem={disabledFirstItem}
         disabledLastItem={disabledLastItem}
         selected={values.selected}
         valuesList={valuesList}
      />
   );
};

export default MainClientTestItem;

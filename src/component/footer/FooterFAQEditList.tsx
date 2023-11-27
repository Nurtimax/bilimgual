import { CardContent } from '@mui/material';
import React, { FC } from 'react';
import { FormikErrors } from 'formik';

import { IFAQValues } from '../admin/footer';

import FooterFAQEditAccordion from './FooterFAQEditAccordion';

interface IFooterFAQEditList {
   values: IFAQValues[];
   removeFields: (id: string) => void;
   setValues: (
      values: React.SetStateAction<IFAQValues[]>,
      shouldValidate?: boolean | undefined
   ) => Promise<FormikErrors<IFAQValues[]>> | Promise<void>;
}

const FooterFAQEditList: FC<IFooterFAQEditList> = ({ values, setValues, removeFields }) => {
   const handleChangeAnswer = (newValue: string, id: string) => {
      setValues((prev) =>
         prev.map((el) => {
            if (el.id === id) {
               return { ...el, answer: newValue };
            }
            return el;
         })
      );
   };

   const handleChangeQuestion = (newValue: string, id: string) => {
      setValues((prev) =>
         prev.map((el) => {
            if (el.id === id) {
               return { ...el, question: newValue };
            }
            return el;
         })
      );
   };

   return (
      <CardContent>
         {values.map((value) => (
            <FooterFAQEditAccordion
               answerValue={value?.answer || ''}
               questionValue={value?.question || ''}
               changeAnswer={handleChangeAnswer}
               changeQuestion={handleChangeQuestion}
               id={value?.id || ''}
               removeFields={removeFields}
            />
         ))}
      </CardContent>
   );
};

export default FooterFAQEditList;

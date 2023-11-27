import { Collapse, Divider, IconButton, Input, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface IFooterFAQEditAccordion {
   changeQuestion?: (value: string, id: string) => void;
   changeAnswer?: (value: string, id: string) => void;
   removeFields?: (id: string) => void;
   questionValue: string;
   answerValue: string;
   id: string;
}

const FooterFAQEditAccordion: FC<IFooterFAQEditAccordion> = ({
   answerValue,
   changeAnswer,
   changeQuestion,
   removeFields,
   questionValue,
   id
}) => {
   const [open, setOpen] = useState(true);

   const handleQuestions: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      if (typeof changeQuestion === 'function') {
         changeQuestion(e.target.value, id);
      }
   };

   const handleRemoveField = () => {
      if (typeof removeFields === 'function') {
         removeFields(id);
      }
   };

   const handleAnswer: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
      if (typeof changeAnswer === 'function') {
         changeAnswer(e.target.value, id);
      }
   };

   return (
      <>
         <Divider color="#4A4A4A" />

         <Stack direction="row" display="grid" gridTemplateColumns="39fr 1fr 1fr" pt={1}>
            <Input placeholder="Enter Questions" id="faq" value={questionValue} onChange={handleQuestions} />
            <IconButton onClick={() => setOpen((prev) => !prev)}>
               <AddIcon />
            </IconButton>
            <IconButton color="error" onClick={handleRemoveField}>
               <DeleteIcon />
            </IconButton>
         </Stack>
         <Collapse in={open}>
            <Input
               placeholder="Enter Answer"
               id="faq_answer"
               multiline
               fullWidth
               sx={{ pl: 1, py: 1.5 }}
               value={answerValue}
               onChange={handleAnswer}
            />
         </Collapse>
      </>
   );
};

export default FooterFAQEditAccordion;

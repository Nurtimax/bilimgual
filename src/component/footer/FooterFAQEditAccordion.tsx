import { Collapse, Divider, IconButton, Input, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { FC, useState } from 'react';

interface IFooterFAQEditAccordion {
   changeQuestion: (value: string, id: string) => void;
   changeAnswer: (value: string, id: string) => void;
   questionValue: string;
   answerValue: string;
   id: string;
}

const FooterFAQEditAccordion: FC<IFooterFAQEditAccordion> = ({
   answerValue,
   changeAnswer,
   changeQuestion,
   questionValue,
   id
}) => {
   const [open, setOpen] = useState(true);

   return (
      <>
         <Divider color="#4A4A4A" />

         <Stack direction="row" display="grid" gridTemplateColumns="39fr 1fr" pt={1}>
            <Input
               placeholder="Enter Questions"
               id="faq"
               value={questionValue}
               onChange={(e) => changeQuestion(e.target.value, id)}
            />
            <IconButton onClick={() => setOpen((prev) => !prev)}>
               <AddIcon />
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
               onChange={(e) => changeAnswer(e.target.value, id)}
            />
         </Collapse>
      </>
   );
};

export default FooterFAQEditAccordion;

import { Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { TokenAnnotator } from 'react-text-annotate';

export const TEXT =
   'When Sebastian Thrun started working on self-driving cars at Google in 2007, few people outside of the company took him seriously. “I can tell you very senior CEOs of major American car companies would shake my hand and turn away because I wasn’t worth talking to,” said Thrun, now the co-founder and CEO of online higher education startup Udacity, in an interview with Recode earlier this week. A little less than a decade later, dozens of self-driving startups have cropped up while automakers around the world clamor, wallet in hand, to secure their place in the fast-moving world of fully automated transportation.';

interface TokenSpan {
   start: number;
   end: number;
   tokens: string[];
}

interface IHighlightState extends TokenSpan {
   tag: string;
}

const HighlightsAnswer = () => {
   const [state, setState] = useState<IHighlightState | undefined>();

   const handleChange = (value: IHighlightState[]) => {
      setState(value[0]);
   };

   return (
      <Grid container spacing={3}>
         <Grid item xs={6}>
            <Typography variant="h5" sx={{ border: '1.5px solid #dfdfdf', borderRadius: 2, px: 2 }}>
               Passage
            </Typography>
            <TokenAnnotator
               style={{
                  maxWidth: 500,
                  lineHeight: 1.5,
                  padding: 16
               }}
               tokens={TEXT.split(' ')}
               value={state ? [state] : []}
               onChange={handleChange}
               getSpan={(span: TokenSpan) => ({ ...span, tag: ' ' })}
            />
         </Grid>
         <Grid item xs={6}>
            <Typography variant="h5" lineHeight={1.2}>
               Click and drad text to highlight the answerr to the question below
            </Typography>
            <Typography variant="body3">What did rresidents think could happen with new bridge?</Typography>
            <TextField value={state?.tokens.join(' ')} fullWidth rows={5} multiline />
         </Grid>
      </Grid>
   );
};

export default HighlightsAnswer;

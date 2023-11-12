import { IconButton, Stack } from '@mui/material';
import React, { FC, memo } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface ICopyClipboard {
   type: string;
   text: string;
}

const CopyClipboard: FC<ICopyClipboard> = memo(({ text, type }) => {
   return (
      <Stack direction="row" alignItems="center">
         {type}: <strong>{text}</strong>
         <CopyToClipboard text={text}>
            <IconButton size="small">
               <ContentCopyIcon sx={{ width: 15, height: 15 }} />
            </IconButton>
         </CopyToClipboard>
      </Stack>
   );
});

export default CopyClipboard;

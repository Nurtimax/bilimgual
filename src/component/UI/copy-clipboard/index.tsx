import { IconButton, Stack } from '@mui/material';
import React, { FC, memo, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface ICopyClipboard {
   type: string;
   text: string;
}

const CopyClipboard: FC<ICopyClipboard> = memo(({ text, type }) => {
   const [copied, setCopied] = useState(false);

   useEffect(() => {
      const handleGetClipboard = async () => {
         const textValue = await window.navigator.clipboard.readText();

         if (text === textValue) {
            setCopied(true);
         }
      };
      handleGetClipboard();
   }, [text]);

   return (
      <Stack direction="row" alignItems="center">
         {type}: <strong>{text}</strong>
         {copied ? (
            <IconButton size="small">
               <CheckBoxIcon sx={{ width: 15, height: 15 }} />
            </IconButton>
         ) : (
            <CopyToClipboard text={text}>
               <IconButton size="small" onClick={() => setCopied(true)}>
                  <ContentCopyIcon sx={{ width: 15, height: 15 }} />
               </IconButton>
            </CopyToClipboard>
         )}
      </Stack>
   );
});

export default CopyClipboard;

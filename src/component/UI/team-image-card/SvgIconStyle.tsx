import { Box, SxProps } from '@mui/material';
import { FC, memo } from 'react';

// ----------------------------------------------------------------------

interface ISvgIconStyle {
   src: string;
   sx: SxProps;
}

const SvgIconStyle: FC<ISvgIconStyle> = memo(({ src, sx }) => {
   return (
      <Box
         component="span"
         sx={{
            width: 24,
            height: 24,
            display: 'inline-block',
            bgcolor: 'currentColor',
            mask: `url(${src}) no-repeat center / contain`,
            WebkitMask: `url(${src}) no-repeat center / contain`,
            ...sx
         }}
      />
   );
});

export default SvgIconStyle;

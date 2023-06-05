// import MainLayout from '../layout';

import { Box } from '@mui/material';

import { Typography } from '../component/UI';

type ITypographyVariantsType =
   | 'h1'
   | 'h2'
   | 'h3'
   | 'h4'
   | 'h5'
   | 'h6'
   | 'body1'
   | 'body2'
   | 'body3'
   | 'body4'
   | 'bodySmall'
   | 'subtitle1'
   | 'subtitle2'
   | 'caption'
   | 'button'
   | 'overline'
   | 'inherit'
   | 'bold'
   | 'medium'
   | 'regular';

const typographyVariants: ITypographyVariantsType[] = [
   'h1',
   'h2',
   'h3',
   'h4',
   'h5',
   'h6',
   'body1',
   'body2',
   'body3',
   'body4',
   'bodySmall',
   'subtitle1',
   'subtitle2',
   'caption',
   'button',
   'overline',
   'inherit',
   'bold',
   'medium',
   'regular'
];

export default function Home() {
   return (
      <>
         {/* <MainLayout></MainLayout> */}
         {typographyVariants.map((item) => (
            <Box key={item}>
               <Typography variant={item}>Typography variant: {item}</Typography>
            </Box>
         ))}
      </>
   );
}

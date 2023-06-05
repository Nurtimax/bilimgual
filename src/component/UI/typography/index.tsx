import { createTheme, ThemeProvider, Typography as MuiTyoigraphy, TypographyProps } from '@mui/material';
import { FC } from 'react';

interface IindexProps extends TypographyProps {
   [key: string]: unknown;
}

declare module '@mui/material/Typography' {
   interface TypographyPropsVariantOverrides {
      body3: true;
      body4: true;
      bodySmall: true;
      bold: true;
      medium: true;
      regular: true;
   }
}

declare module '@mui/material/styles' {
   interface BreakpointOverrides {
      lgMobile: true;
      mdMobile: true;
      smMobile: true;
   }
}

const Typography: FC<IindexProps> = (props) => {
   const theme = createTheme({
      breakpoints: {
         values: {
            xl: 0,
            lg: 1200,
            md: 900,
            sm: 600,
            xs: 1536,
            lgMobile: 500,
            mdMobile: 400,
            smMobile: 350
         }
      },
      components: {
         MuiTypography: {
            styleOverrides: {
               root: {
                  fontFamily: 'Gilroy',
                  fontStyle: 'normal'
               }
            },
            variants: [
               {
                  props: { variant: 'h1' },
                  style: ({ theme }) => ({
                     fontWeight: 700,
                     fontSize: '60px',
                     lineHeight: '73px',

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '60px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '60px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '38px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '32px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '23px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '23px'
                     }
                  })
               },
               {
                  props: { variant: 'h2' },
                  style: ({ theme }) => ({
                     fontWeight: '700',
                     fontSize: '40px',
                     lineHeight: '130%',
                     /* or 52px */

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '40px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '40px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '34px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '28px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '18px'
                     }
                  })
               },
               {
                  props: { variant: 'h3' },
                  style: () => ({
                     fontWeight: '700',
                     lineHeight: '46px',
                     /* or 52px */

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '38px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '38px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '30px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '24px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '17px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '17px'
                     }
                  })
               },
               {
                  props: { variant: 'h4' },
                  style: () => ({
                     fontWeight: '700',
                     fontSize: '30px',
                     lineHeight: '46px',
                     /* or 52px */

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '30px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '30px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '26px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '16px'
                     }
                  })
               },
               {
                  props: { variant: 'h5' },
                  style: () => ({
                     fontWeight: '700',
                     lineHeight: '46px',
                     /* or 52px */

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '28px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '28px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '22px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '14px'
                     }
                  })
               },
               {
                  props: { variant: 'h6' },
                  style: () => ({
                     fontWeight: '700',
                     fontSize: '20px',
                     lineHeight: '46px',
                     /* or 52px */

                     color: '#232128',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '12px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '12px'
                     }
                  })
               },
               {
                  props: { variant: 'body1' },
                  style: () => ({
                     fontFamily: 'Poppins',
                     fontWeight: 400,
                     lineHeight: '36px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '24px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '24px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '22px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '16px'
                     }
                  })
               },
               {
                  props: { variant: 'body2' },
                  style: () => ({
                     fontFamily: 'Poppins',
                     fontWeight: 400,
                     lineHeight: '30px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '14px'
                     }
                  })
               },
               {
                  props: { variant: 'body3' },
                  style: () => ({
                     fontFamily: 'Poppins',
                     fontWeight: 400,
                     lineHeight: '27px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '12px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '12px'
                     }
                  })
               },
               {
                  props: { variant: 'body4' },
                  style: () => ({
                     fontFamily: 'Poppins',
                     fontWeight: 400,
                     lineHeight: '24px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '10px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '10px'
                     }
                  })
               },
               {
                  props: { variant: 'bodySmall' },
                  style: () => ({
                     fontFamily: 'Poppins',
                     fontWeight: 400,
                     lineHeight: '21px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '10px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '8px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '8px'
                     }
                  })
               },
               {
                  props: { variant: 'bold' },
                  style: ({ theme }) => ({
                     fontFamily: 'DINNextRoundedLTPro-Bold',
                     fontWeight: 'bold',
                     lineHeight: '24px',
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '32px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '32px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '20px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('lgMobile', 'sm')]: {
                        fontSize: '15px'
                     },
                     [theme.breakpoints.between('mdMobile', 'lgMobile')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '14px'
                     }
                  })
               },
               {
                  props: { variant: 'medium' },
                  style: ({ theme }) => ({
                     fontFamily: 'DINNextRoundedLTPro-Bold',
                     lineHeight: '24px',
                     fontWeight: 500,
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '32px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '32px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('lgMobile', 'sm')]: {
                        fontSize: '14px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '14px'
                     }
                  })
               },
               {
                  props: { variant: 'regular' },
                  style: ({ theme }) => ({
                     fontFamily: 'DINNextRoundedLTW01-Regular',
                     lineHeight: '24px',
                     fontWeight: 400,
                     /* identical to box height */

                     color: '#000000',
                     [theme.breakpoints.between('xl', 'xs')]: {
                        fontSize: '28px'
                     },
                     [theme.breakpoints.between('lg', 'xl')]: {
                        fontSize: '28px'
                     },
                     [theme.breakpoints.between('md', 'lg')]: {
                        fontSize: '26px'
                     },
                     [theme.breakpoints.between('sm', 'md')]: {
                        fontSize: '24px'
                     },
                     [theme.breakpoints.between('lgMobile', 'sm')]: {
                        fontSize: '18px'
                     },
                     [theme.breakpoints.between('mdMobile', 'lgMobile')]: {
                        fontSize: '16px'
                     },
                     [theme.breakpoints.between('smMobile', 'mdMobile')]: {
                        fontSize: '13px'
                     },
                     [theme.breakpoints.down('lgMobile')]: {
                        fontSize: '13px'
                     }
                  })
               }
            ]
         }
      }
   });

   return (
      <ThemeProvider theme={theme}>
         <MuiTyoigraphy {...props} />
      </ThemeProvider>
   );
};

export default Typography;
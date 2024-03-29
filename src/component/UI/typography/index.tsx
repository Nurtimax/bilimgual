import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

declare module '@mui/material/Typography' {
   export interface TypographyPropsVariantOverrides {
      body3: true;
      body4: true;
      bodySmall: true;
      bold: true;
      medium: true;
      regular: true;
   }
}

declare module '@mui/material/styles' {
   export interface BreakpointOverrides {
      lgMobile: true;
      mdMobile: true;
      smMobile: true;
   }
}

export const TYPOGRAPHY_CLASSNAMES = {
   cardDescription: 'card__description'
};

type ComponentTypography = {
   defaultProps?: ComponentsProps['MuiTypography'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
   variants?: ComponentsVariants['MuiTypography'];
};

const themeTypography: ComponentTypography = {
   styleOverrides: {
      root: {
         fontFamily: 'Geologica',
         fontStyle: 'normal'
      }
   },
   variants: [
      {
         props: { variant: 'body4', className: TYPOGRAPHY_CLASSNAMES.cardDescription },
         style: {
            textAlign: 'center',
            display: 'block'
         }
      },
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
               lineHeight: 1.5,
               fontSize: '38px'
            },
            [theme.breakpoints.between('sm', 'md')]: {
               lineHeight: 1,
               fontSize: '32px'
            },
            [theme.breakpoints.between('lgMobile', 'sm')]: {
               fontSize: '25px',
               lineHeight: 1
            },
            [theme.breakpoints.between('smMobile', 'lgMobile')]: {
               fontSize: '23px',
               lineHeight: 1
            },
            [theme.breakpoints.down('smMobile')]: {
               fontSize: '21px',
               lineHeight: 1
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
         style: ({ theme }) => ({
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
         style: ({ theme }) => ({
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
         style: ({ theme }) => ({
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
         style: ({ theme }) => ({
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
         style: ({ theme }) => ({
            fontFamily: 'Poppins',
            fontWeight: 400,
            lineHeight: '36px',
            fontSize: '24px',
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
         style: ({ theme }) => ({
            fontFamily: 'Poppins',
            fontWeight: 400,
            lineHeight: '30px',
            fontSize: '20px',
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
            [theme.breakpoints.between('lgMobile', 'sm')]: {
               fontSize: '16px',
               lineHeight: 1.3
            },
            [theme.breakpoints.between('mdMobile', 'lgMobile')]: {
               lineHeight: 1.2,
               fontSize: '14px'
            },
            [theme.breakpoints.down('smMobile')]: {
               fontSize: '14px',
               lineHeight: 1.2
            }
         })
      },
      {
         props: { variant: 'body3' },
         style: ({ theme }) => ({
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
         style: ({ theme }) => ({
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
               lineHeight: 1.2,
               fontSize: '14px'
            },
            [theme.breakpoints.between('smMobile', 'mdMobile')]: {
               lineHeight: 1.2,
               fontSize: '10px'
            },
            [theme.breakpoints.down('lgMobile')]: {
               lineHeight: 1.2,
               fontSize: '10px'
            }
         })
      },
      {
         props: { variant: 'bodySmall' },
         style: ({ theme }) => ({
            fontFamily: 'Poppins',
            fontWeight: 400,
            lineHeight: '21px',
            fontSize: '14px',
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
               fontSize: '10px',
               lineHeight: 1.2
            },
            [theme.breakpoints.between('smMobile', 'mdMobile')]: {
               fontSize: '8px',
               lineHeight: 1.2
            },
            [theme.breakpoints.down('lgMobile')]: {
               fontSize: '8px',
               lineHeight: 1.2
            }
         })
      },
      {
         props: { variant: 'bold' },
         style: ({ theme }) => ({
            fontFamily: 'Gudea',
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
            fontFamily: 'Gudea',
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
            fontFamily: 'Gudea',
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
};

export default themeTypography;

import { ComponentsProps, ComponentsOverrides, Theme, ComponentsVariants } from '@mui/material';

type TButton = {
   defaultProps?: ComponentsProps['MuiButton'];
   styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
   variants?: ComponentsVariants['MuiButton'];
};

declare module '@mui/material/Button' {
   interface ButtonPropsVariantOverrides {
      next: true;
      login: true;
      register: true;
      begin: true;
      come: true;
   }
}

const Button: TButton = {
   styleOverrides: {
      root: {
         fontWeight: '900',
         fontFamily: 'Gudea',
         borderRadius: '8px',
         padding: '12.5px 24px',
         fontSize: '14px'
      }
   },
   variants: [
      {
         props: { variant: 'contained' },
         style: ({ theme }) => ({
            color: theme.palette.primary.light, // #fff
            border: 'none',
            '&:hover': {
               background: 'rgba(58, 16, 229, 0.9)'
            }
         })
      },
      {
         props: { variant: 'come' },
         style: ({ theme }) => ({
            background: theme.palette.primary.main,
            boxShadow: '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
            color: theme.palette.primary.light, // #fff
            border: 'none',
            '&:hover': {
               background: 'rgba(58, 16, 229, 0.9)'
            }
         })
      },
      {
         props: { color: 'success' },
         style: ({ theme }) => ({
            background: theme.palette.success.main, // #2AB930
            color: theme.palette.primary.light, //  #fff
            '&:hover': {
               background: theme.palette.success.contrastText // #31CF38
            },
            '&:active': {
               background: theme.palette.success.light // #08AF10
            }
         })
      },
      {
         props: { disabled: true },
         style: () => ({
            background: 'none',
            '&.Mui-disabled': {
               border: '2px solid'
            }
         })
      },
      {
         props: { variant: 'outlined' },
         style: ({ theme }) => ({
            border: '2px solid',
            '&:hover': {
               border: '2px solid',
               background: theme.palette.primary.main, //#3A10E5
               color: theme.palette.primary.light // #fff
            }
         })
      },
      {
         props: { variant: 'next' },
         style: ({ theme }) => ({
            background: theme.palette.primary.main, //#3A10E5
            border: 'none',
            color: theme.palette.primary.light, // #fff
            '&:hover': {
               background: theme.palette.primary.contrastText // #4E28E8
            },
            '&:disabled': {
               background: theme.palette.background.default, // #C4C4C4
               border: 'none',
               color: theme.palette.primary.light // #fff
            }
         })
      },
      {
         props: {
            variant: 'login'
         },
         style: ({ theme }) => ({
            border: `2px solid ${theme.palette.error.contrastText}`, // #4C4859
            color: theme.palette.error.dark, // #4C4C4C
            '&:hover': {
               background: theme.palette.primary.main, //#3A10E5,
               color: theme.palette.primary.light, // #fff
               border: `2px solid ${theme.palette.primary.main}` //#3A10E5
            }
         })
      },
      {
         props: { variant: 'register' },
         style: ({ theme }) => ({
            background: theme.palette.primary.light,
            border: 'none',
            boxShadow: '0px 1px 2px rgba(76, 72, 89, 0.2), 0px 1px 2px rgba(76, 72, 89, 0.2)',
            '&:hover': {
               background: '#F0EDED'
            },
            '&:active': {
               background: '#EBE6E6'
            }
         })
      },
      {
         props: { variant: 'begin' },
         style: ({ theme }) => ({
            background: 'linear-gradient(186.36deg, #CB4080 5.01%, #C93D7D 29.76%, #BD3172 55.4%, #AD1E60 94.99%)',
            boxShadow: 'inset 4px -5px 0px rgba(255, 204, 191, 0.68)',
            padding: '16px 65px 23px',
            clipPath:
               'polygon(1% 1%, 100% 0%, 100% 100%, 91% 99%, 86% 99%, 85% 98%, 82% 98%, 80% 98%, 77% 97%, 74% 97%, 71% 96%, 67% 96%, 64% 95%, 60% 95%, 56% 95%, 53% 95%, 50% 94%, 45% 94%, 41% 94%, 38% 95%, 34% 95%, 30% 96%, 26% 97%, 24% 98%, 20% 98%, 19% 99%, 11% 99%, 1% 99%, 0% 49%, 1% 12%)',
            backgroundClip: 'padding-box',
            borderRadius: '120px',
            color: theme.palette.primary.light
         })
      }
   ]
};

export default Button;

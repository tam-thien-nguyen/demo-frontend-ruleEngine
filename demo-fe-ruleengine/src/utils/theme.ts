import { red } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
export let theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
      light: '#EDF7FA'
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#21243D'
    }
  },
  typography: {
    fontFamily: 'Heebo, sans-serif',
    h3: {
      fontSize: '2rem'
    }
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md'
      },
      styleOverrides:{
         maxWidthSm: {         
          '@media (min-width: 600px)' : {
            maxWidth: '680px'
          }
         },
         maxWidthMd: {
          '@media (min-width: 900px)' : {
            maxWidth: '860px'
          }
         }
      },
      variants: []
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          color: 'black',
          '&:hover, &.active': {
            color: '#FF6464'
          }
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props:  { variant: 'contained', color: 'primary'},
          style:{
             color: 'white'
          }
        }
      ],
      
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2,
        }
      },
      variants: [
        {
          props: {color: 'secondary'},
          style: {
            backgroundColor: '#142850',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16
          },
        },
      ],
    },
  },
});
 
// 1 cach de dynamic thay doi fontSize ma MUI supported: https://mui.com/material-ui/customization/typography/#responsive-font-sizes
theme = responsiveFontSizes(theme)

// 1 cach viet nua, mobile thi 2 rem, up break point md: thi 3 rem
// theme.typography.h3 = {
//   fontSize: '2rem',

//   [theme.breakpoints.up('md')]:  {
//     fontSize: '3rem'
//   }
// }
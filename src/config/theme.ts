import { createTheme } from '@mui/material'

export const preLoadingProcessBarColor = 'rgba(108, 122, 137)'
export const linearGradientColor = 'linear-gradient(135deg, #181E54 0%, #EB1933 100%)'
export const calenderButtonHovered = 'rgba(245, 245, 245, 0.80)'
export const mainRed = 'rgba(235, 25, 51, 1)'
export const calenderBackgroundLinearGradientColor = 'linear-gradient(45deg, #181E54, #EB1933)'
export const shuttleGray = '#5F6D7E'
export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(24, 30, 84, 1)',
    },
    info: {
      main: '#FFF',
      light: '#E4E6EF',
    },
    text: {
      primary: '#3f4254',
    },
  },
  typography: palette => ({
    fontFamily: '"Nunito", sans-serif',
    textAlign: 'center',
    root: {
      width: '100px',
      height: '100px',
      background: '#F4EBFF',
      border: '10px solid #F9F5FF',
      borderRadius: '28px',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
    },
    fontWeightBold: '700',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    h1: {
      fontSize: '42px',
      lineHeight: '48px',
    },
    h2: {
      fontSize: '36px',
      lineHeight: '44px',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    h5: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '22px',
      fontWeight: 700,
      color: '#272D37',
    },

    body1: {
      fontSize: '16px',
      lineHeight: '24px',
    },
    body2: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    body3: {
      fontSize: '20px',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      textAlign: 'left',
    },
    resume: {
      50: '#E7EEFA',
      100: '#C7D6E4',
      200: '#A8B9CC',
      300: '#889DB3',
      400: '#7188A1',
      500: '#59748F',
      600: '#4C667E',
      700: '#3C5268',
      800: '#2E4052',
      900: '#1C2C3A',
    },
  }),

  breakpoints: {
    values: {
      xs: 0,
      sm: 1000,
      md: 1240,
      lg: 1350,
      xl: 1440,
    },
  },
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          outline: 'none',
          '&:focus': {
            outline: 0,
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          '& > .MuiSwitch-thumb': {
            backgroundColor: '#FFFFFF',
          },
          '&.Mui-checked > .MuiSwitch-thumb': {
            backgroundColor: '#59748F', // resume 500 variant
          },
          '& + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4', // resume 100 variant
          },
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: '#C7D6E4', // resume 100 variant
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '58px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: false,
      },
      styleOverrides: {
        root: {
          fontSize: '14px',
          marginTop: '-10px',
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        sx: {
          color: () => theme.palette.common.black,
          height: '100%',
          fontSize: '16px',
          fontWeight: 400,
        },
      },
      styleOverrides: {
        root: {
          fieldset: {
            outline: 0,
            border: 0,
          },
        },

        error: () => ({
          '&.Mui-error': {
            input: {
              color: theme.palette.error.main,
            },
          },
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { fontSize: 15 },
      },
    },
  },
})

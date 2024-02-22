const { createTheme, responsiveFontSizes } = require('@mui/material');

let theme = createTheme({
  palette: {
    primary: {
      main: '#f4f4f4',
      dark: '#acbecf',
    },

    secondary: {
      main: '#f5f3ee',
    },
  },

  typography: {
    fontFamily: [
      'Trebuchet MS, sans-serif',
      'Mulish, sans-serif',
      'Noto Serif, serif',
    ],
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

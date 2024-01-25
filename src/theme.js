const { createTheme, responsiveFontSizes } = require("@mui/material");

let theme = createTheme({
  palette: {
    primary: {
      main: "#f4f4f4",
      dark: "#acbecf",
    },

    secondary: {
      main: "#f5f3ee",
    },
  },

  fonts: {
    Trebuchet: "Trebuchet MS, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

export default theme;

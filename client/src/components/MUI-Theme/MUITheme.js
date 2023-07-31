import { createTheme } from '@mui/material/styles';

// Define the color variables
const colorPrimary = '#lightgrey';
const colorSecondary = '#1F2D37';
const colorAccent = '#6AD38B';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: colorPrimary,
    },
    secondary: {
      main: colorSecondary,
    },
    accent: {
      main: colorAccent,
    },
  },
});

export default theme;
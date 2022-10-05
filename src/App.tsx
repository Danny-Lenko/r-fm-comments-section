import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    blueCustom: Palette['primary'];
    redCustom: Palette['primary'];
    greyCustom: Palette['primary'];
  }

  interface PaletteOptions {
    blueCustom?: PaletteOptions['primary'];
    redCustom?: PaletteOptions['primary'];
    greyCustom?: PaletteOptions['primary'];
  }
}

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
      ].join(','),
    },
    palette: {
      blueCustom: {
        main: 'hsl(238, 40%, 52%)',
        light: 'hsl(239, 57%, 85%)',
        dark: 'hsl(212, 24%, 26%)',
        contrastText: '#fff',
      },
      redCustom: {
        main: 'hsl(358, 79%, 66%)',
        light: 'hsl(357, 100%, 86%)',
        contrastText: '#fff'
      },
      greyCustom: {
        main: 'hsl(223, 19%, 93%)',
        light: 'hsl(228, 33%, 97%)',
        contrastText: '#000'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <h2>Hello App</h2>

    </ThemeProvider>
  )
}

export default App

import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import CommentRepliesSection from './CommentRepliesSection';
import { useSelector } from 'react-redux'
import { Data } from './common/interfaces'
import TextFieldCard from './components/TextFieldCard/TextFieldCard';

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
      dark: 'hsl(211, 10%, 45%)',
      contrastText: '#000'
    },
    background: {
      default: 'hsl(228, 33%, 97%)'
    }
  },
});

function App() {
  const data = useSelector((state: Data) => state.comments)
  const comments = data.comments.slice().sort((a, b) => b.score - a.score)
  const isReply = data.isReply
  console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='md' sx={{ my: 3 }}>
        {
          comments.map(comment => <CommentRepliesSection key={comment.id} {...comment} />)
        }
        { !isReply && <TextFieldCard /> }
      </Container>
    </ThemeProvider>
  )
}

export default App

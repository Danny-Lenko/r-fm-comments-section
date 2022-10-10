import { createTheme, ThemeProvider, CssBaseline, Container } from '@mui/material';
import CommentCard from './CommentCard'
import CommentRepliesSection from './CommentRepliesSection';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './features/commentsSlice';
import { Data } from './interfaces'

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

  const state = useSelector( (state:Data) => state )
  // const dispatch = useDispatch()

  console.log(state)
  const commentsState = state.comments
  const comments = commentsState.comments

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='md' sx={{my: 3}}>

        {/* {
          comments.map(comment => <CommentCard key={comment.id} {...comment} />)
        } */}

        {
          comments.map(comment => <CommentRepliesSection key={comment.id} {...comment} />)
        }


      </Container>
    </ThemeProvider>
  )
}

export default App

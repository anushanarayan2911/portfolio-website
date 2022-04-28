import {createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Navbar from './components/Navbar/navBar'
import Slideshow from './components/slideshow';
import './App.css';

const theme = createTheme({
  palette : {
    primary : {
      main : '#fffffff'
    },
    secondary: {
      main: '#000000'
    }
  },
  typography : {
    fontFamily : [
      'runda'
    ]
  },
  h4 : {
    fontWeight: 300,
    fontSize: 28,
    lineHeight: '1rem'
  },
  h5 : {
    fontWeight: 100,
    lineHeight: '1rem'
  }
})

const styles = makeStyles ({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})
function App() {
  const classes = styles();
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Navbar/>
      </ThemeProvider>
    </div>
    
  );
}

export default App;

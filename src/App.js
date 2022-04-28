import logo from './logo.svg';
import {createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/navBar'
import Grid from './components/grid';
import Footer from './components/footer';
import './App.css';

import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from'@material-ui/icons/Http';
import { Typography } from '@material-ui/core';

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
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}

export default App;

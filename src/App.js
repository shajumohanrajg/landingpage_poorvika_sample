import './App.css';
import Container from '@mui/material/Container';

import { createTheme } from '@mui/material/styles';
import { useEffect } from "react";
import { Stack  } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import LapTops from './components/LapTops';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
function App() {
  useEffect(() => {
    document.title = "Laptop Landing Page- Home";
  }, []);


  return (
    <ThemeProvider theme={theme}>
    <Container disableGutters  sx={{padding:"none",margin:'none',maxWidth:"xl"}} >
       <Stack>
    <div className="App">
      
       <AppBar />
       <LapTops />
       <Footer />
    </div></Stack>
    </Container>
    </ThemeProvider>
  );
}

export default App;

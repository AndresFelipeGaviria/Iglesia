import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import {Grid, Container} from '@mui/material';
import Slide from '@mui/material/Slide';
import Logo from "./images/fondo4.jpg"
import Carousel from "./pages/carousel";
import Logotipo from "./images/logotipo.jpg"
import Header1 from "./pages/firstHeader"
import Header2 from "./pages/secondHeader"


function App(props) {

  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  

  return (
    <div className="App">
      <header className="App-header" >
        <div style={{backgroundImage: `url(${Logotipo})`, backgroundSize: 'cover', height: 350, width: '100%'}}></div>
        <Container>
          <Box sx={{ my: 2 }}>
            <Header1 />
            <Typography>Hola Madresita, esta es nuestra primer pagina web</Typography>
          </Box>
        </Container>
      </header>
      <header className="App-header2" >
        <Container>
          <Box sx={{ my: 2 }}>
            <Header2 />
          </Box>
        </Container>
      </header>
    </div>
  );
}

export default App;

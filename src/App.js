import React from 'react';
import {useState} from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './components/style.css';
import Negro from './components/Negro/Negro.jsx';
import Tridente from './components/Tridente.js';
import Goleadores from './components/Goleadores.jsx';
import Contenedor from './components/Contenedor.js';
import Equipos from './components/Equipos.jsx';
import Partidos from './components/Partidos.jsx';


function App() {

  const [counters, setCounters] = useState([
    { id: 1, img: "/img/Cavani.jpg", value: 20, name: 'Cavani' },
    { id: 2, img:"/img/Medina.jpg", value: 8, name: 'Medina'  },
    { id: 3, img:"/img/Merentiel.jpg", value: 31, name: 'Merentiel'  },
  ]);

  const drawerWidth = 240;
  
  function Home() {
    return (            
      <Tridente counters={counters} />
    );
  }
  
  function Goleador() {
    return (
      <Goleadores counters={counters} setCounters={setCounters} />     
    );
  }
  
  function Maradona() {
    return (
      <Contenedor />   
    );
  }

  return (
    <Router>  
    <Box sx={{ height: '100vh', display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar className="topBar" sx={{ height: '10vh' }}>
          <Typography variant="h6" noWrap>
            Bostero.com
          </Typography>
        </Toolbar>
      </AppBar>
           
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar/>
        <Box className="barraIzq" sx={{ overflow: 'auto' }}>
              <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Tridente" />
              </ListItem>
              <ListItem button component={Link} to="/goleadores">
                <ListItemText primary="Goleadores" />
              </ListItem>
              <ListItem button component={Link} to="/Maradona">
                <ListItemText primary="Maradona" />
              </ListItem>
              <ListItem button component={Link} to="/Equipos">
                <ListItemText primary="Equipos" />
              </ListItem> 
              <ListItem button component={Link} to="/Partidos">
                <ListItemText primary="Partidos" />
              </ListItem>              
              <ListItem  component={Link} to="/negro">
                <ListItemText primary="Negro" />
              </ListItem>
            </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0,  height: '100vh'}}
      >
        <Toolbar />
        <Container className="conteNedor" sx={{ padding: 0 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/goleadores" element={<Goleador />} />
                  <Route path="/Maradona" element={<Maradona />} />       
                  <Route path="/Equipos" element={<Equipos />} />       
                  <Route path="/Partidos" element={<Partidos />} />       
                  <Route path="/negro" element={<Negro />} />                 
                </Routes>
        </Container>
      </Box>
      
    </Box>
  </Router>
  );
}

export default App;

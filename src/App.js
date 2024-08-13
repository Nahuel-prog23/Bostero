import React from 'react';
import {useState} from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './components/style.css';
import Tridente from './components/Tridente.js';
import Goleadores from './components/Goleadores.jsx';
import Contenedor from './components/Contenedor.js';

function App() {

  const [counters, setCounters] = useState([
    { id: 1, value: 19, name: 'Cavani' },
    { id: 2, value: 7, name: 'Medina'  },
    { id: 3, value: 30, name: 'Merentiel'  },
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
                </Routes>
        </Container>
      </Box>
      
    </Box>
  </Router>
  );
}

export default App;

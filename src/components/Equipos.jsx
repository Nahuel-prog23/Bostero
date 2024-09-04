import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const equipos = [
  "Boca Juniors",
  "Independiente",
  "Racing Club",
  "San Lorenzo",
  "Vélez Sarsfield",
  "Argentinos Juniors",
  "Estudiantes de La Plata",
  "Gimnasia y Esgrima La Plata",
  "Rosario Central",
  "Newell's Old Boys",
  "Lanús",
  "Banfield",
  "Huracán",
  "Tigre",
  "Colón",
  "Unión",
  "Arsenal de Sarandí",
  "Central Córdoba",
  "Godoy Cruz",
  "Defensa y Justicia",
  "Sarmiento",
  "Platense",
  "Barracas Central",
  "Instituto",
  "Belgrano",
  "Atlético Tucumán",
  "San Martín de San Juan",
  "River Plate"
];

const Equipos = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Equipos de la Primera División Argentina
      </Typography>
      <List>
        {equipos.map((equipo, index) => (
          <ListItem key={index}>
            <>{index + 1}&nbsp;</><ListItemText primary={equipo} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Equipos;

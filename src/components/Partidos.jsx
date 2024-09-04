import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const partidos = [
    { equipoLocal: "River Plate", equipoVisitante: "Boca Juniors", fecha: "2024-09-01", estadio: "Estadio Monumental" },
    { equipoLocal: "Independiente", equipoVisitante: "Racing Club", fecha: "2024-09-02", estadio: "Estadio Libertadores de América" },
    { equipoLocal: "San Lorenzo", equipoVisitante: "Huracán", fecha: "2024-09-03", estadio: "Estadio Nuevo Gasómetro" },
    { equipoLocal: "Lanús", equipoVisitante: "Banfield", fecha: "2024-09-04", estadio: "Estadio Ciudad de Lanús" },
    { equipoLocal: "Vélez Sarsfield", equipoVisitante: "Argentinos Juniors", fecha: "2024-09-05", estadio: "Estadio José Amalfitani" },
    { equipoLocal: "Estudiantes de La Plata", equipoVisitante: "Gimnasia y Esgrima La Plata", fecha: "2024-09-06", estadio: "Estadio Jorge Luis Hirschi" },
    { equipoLocal: "Rosario Central", equipoVisitante: "Newell's Old Boys", fecha: "2024-09-07", estadio: "Estadio Gigante de Arroyito" },
    { equipoLocal: "Colón", equipoVisitante: "Unión", fecha: "2024-09-08", estadio: "Estadio Brigadier General Estanislao López" },
    { equipoLocal: "Tigre", equipoVisitante: "Defensa y Justicia", fecha: "2024-09-09", estadio: "Estadio José Dellagiovanna" },
    { equipoLocal: "Godoy Cruz", equipoVisitante: "Central Córdoba", fecha: "2024-09-10", estadio: "Estadio Malvinas Argentinas" },
    { equipoLocal: "Arsenal de Sarandí", equipoVisitante: "Sarmiento", fecha: "2024-09-11", estadio: "Estadio Julio Humberto Grondona" },
    { equipoLocal: "Platense", equipoVisitante: "Barracas Central", fecha: "2024-09-12", estadio: "Estadio Ciudad de Vicente López" },
    { equipoLocal: "Instituto", equipoVisitante: "Belgrano", fecha: "2024-09-13", estadio: "Estadio Presidente Perón" },
    { equipoLocal: "River Plate", equipoVisitante: "Independiente", fecha: "2024-09-14", estadio: "Estadio Monumental" },
    { equipoLocal: "Boca Juniors", equipoVisitante: "San Lorenzo", fecha: "2024-09-15", estadio: "Estadio Alberto J. Armando" },
    { equipoLocal: "Racing Club", equipoVisitante: "Huracán", fecha: "2024-09-16", estadio: "Estadio Presidente Perón" },
    { equipoLocal: "Vélez Sarsfield", equipoVisitante: "Lanús", fecha: "2024-09-17", estadio: "Estadio José Amalfitani" },
    { equipoLocal: "Argentinos Juniors", equipoVisitante: "Estudiantes de La Plata", fecha: "2024-09-18", estadio: "Estadio Diego Armando Maradona" },
    { equipoLocal: "Gimnasia y Esgrima La Plata", equipoVisitante: "Rosario Central", fecha: "2024-09-19", estadio: "Estadio Juan Carmelo Zerillo" },
    { equipoLocal: "Newell's Old Boys", equipoVisitante: "Colón", fecha: "2024-09-20", estadio: "Estadio Marcelo Bielsa" },
    { equipoLocal: "Unión", equipoVisitante: "Tigre", fecha: "2024-09-21", estadio: "Estadio 15 de Abril" },
    { equipoLocal: "Defensa y Justicia", equipoVisitante: "Godoy Cruz", fecha: "2024-09-22", estadio: "Estadio Norberto Tomaghello" },
    { equipoLocal: "Central Córdoba", equipoVisitante: "Arsenal de Sarandí", fecha: "2024-09-23", estadio: "Estadio Alfredo Terrera" },
    { equipoLocal: "Sarmiento", equipoVisitante: "Platense", fecha: "2024-09-24", estadio: "Estadio Eva Perón" },
    { equipoLocal: "Barracas Central", equipoVisitante: "Instituto", fecha: "2024-09-25", estadio: "Estadio Claudio Chiqui Tapia" },
    { equipoLocal: "Belgrano", equipoVisitante: "River Plate", fecha: "2024-09-26", estadio: "Estadio Julio César Villagra" },
    { equipoLocal: "San Lorenzo", equipoVisitante: "Independiente", fecha: "2024-09-27", estadio: "Estadio Nuevo Gasómetro" }
  ];
  
  // Agrega más partidos según sea necesario



const Partidos = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Partidos del Campeonato
      </Typography>
      <List>
        {partidos.map((partido, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${partido.equipoLocal} vs ${partido.equipoVisitante}`}
              secondary={`Fecha: ${partido.fecha} - Estadio: ${partido.estadio}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Partidos;

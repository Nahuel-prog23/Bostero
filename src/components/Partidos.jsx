import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const fechas = [
  {
    fecha: "2024-05-11",
    partidos: [
      { equipoLocal: "Sarmiento", equipoVisitante: "I. Córdoba", gl: 1, gv: 2, estadio: "Estadio Monumental" },
      { equipoLocal: "Argentinos Juniors", equipoVisitante: "Rosario Central", gl: 3, gv: 2, estadio: "Estadio Monumental" },
      { equipoLocal: "Newell´s Old Boys", equipoVisitante: "Platense", gl: 2, gv: 0, estadio: "Estadio Monumental" },
      { equipoLocal: "Huracán", equipoVisitante: "Defensa y Justicia", gl: 3, gv: 1, estadio: "Estadio Monumental" },
      { equipoLocal: "Godoy Cruz", equipoVisitante: "Barracas Central", gl: 0, gv: 1, estadio: "Estadio Monumental" },
      { equipoLocal: "Independiente", equipoVisitante: "Talleres", gl: 1, gv: 3, estadio: "Estadio Monumental" },
      { equipoLocal: "River Plate", equipoVisitante: "Central Córdoba", gl: 3, gv: 0, estadio: "Estadio Monumental" },
      { equipoLocal: "Deportivo Riestra", equipoVisitante: "San Lorenzo de Almagro", gl: 1, gv: 0, estadio: "Estadio Monumental" },
      { equipoLocal: "Tigre", equipoVisitante: "Estudiantes", gl: 0, gv: 1, estadio: "Estadio Monumental" },
      { equipoLocal: "Belgrano", equipoVisitante: "Racing Club", gl: 4, gv: 4, estadio: "Estadio Monumental" },
      { equipoLocal: "Lanús", equipoVisitante: "Independiente Rivad.", gl: 0, gv: 2, estadio: "Estadio Monumental" },
      { equipoLocal: "At. Tucumán", equipoVisitante: "Boca Juniors", gl: 1, gv: 0, estadio: "Estadio Monumental" },
      { equipoLocal: "Gimnasia La Plata", equipoVisitante: "Vélez Sarsfield", gl: 3, gv: 1, estadio: "Estadio Monumental" },
      { equipoLocal: "Unión Santa Fe", equipoVisitante: "Banfield", gl: 1, gv: 0, estadio: "Estadio Monumental" },
    ]
  },
  {
    fecha: "2024-05-18",
    partidos: [
      { equipoLocal: "Independiente Rivad.", equipoVisitante: "Godoy Cruz", gl: 0, gv: 0, estadio: "Estadio Monumental" },
      { equipoLocal: "River Plate", equipoVisitante: "Belgrano", gl: 3, gv: 0, estadio: "Estadio Monumental" },      
      { equipoLocal: "Defensa y Justicia", equipoVisitante: "Gimnasia La Plata", gl: 1, gv: 1, estadio: "Estadio Monumental" },      
      { equipoLocal: "I. Córdoba", equipoVisitante: "Unión Santa Fe", gl: 1, gv: 1, estadio: "Estadio Monumental" },     
      { equipoLocal: "Barracas Central", equipoVisitante: "Sarmiento", gl: 1, gv: 1, estadio: "Estadio Monumental" },      
      { equipoLocal: "Platense", equipoVisitante: "Independiente", gl: 0, gv: 0, estadio: "Estadio Monumental" },      
      { equipoLocal: "Banfield", equipoVisitante: "Huracán", gl: 1, gv: 1, estadio: "Estadio Monumental" },      
      { equipoLocal: "Talleres", equipoVisitante: "At. Tucumán", gl: 2, gv: 0, estadio: "Estadio Monumental" },      
      { equipoLocal: "Central Córdoba", equipoVisitante: "Boca Juniors", gl: 2, gv: 4, estadio: "Estadio Monumental" },      
      { equipoLocal: "Estudiantes", equipoVisitante: "Deportivo Riestra", gl: 2, gv: 0, estadio: "Estadio Monumental" },      
      { equipoLocal: "San Lorenzo de Almagro", equipoVisitante: "Lanús", gl: 1, gv: 1, estadio: "Estadio Monumental" },      
      { equipoLocal: "Racing Club", equipoVisitante: "Argentinos Juniors", gl: 3, gv: 0, estadio: "Estadio Monumental" },      
      { equipoLocal: "Rosario Central", equipoVisitante: "Tigre", gl: 1, gv: 1, estadio: "Estadio Monumental" },
      { equipoLocal: "Vélez Sarsfield", equipoVisitante: "Newell´s Old Boys", gl: 1, gv: 0, estadio: "Estadio Monumental" },
    ]
  },
  {
    fecha: "2024-05-24",
    partidos: [
      { equipoLocal: "Deportivo Riestra", equipoVisitante: "Rosario Central", estadio: "Estadio Deportivo Riestra", gl: 0, gv: 2 },
      { equipoLocal: "Tigre", equipoVisitante: "Racing Club", estadio: "Estadio José Dellagiovanna", gl: 0, gv: 4 },
      { equipoLocal: "Belgrano", equipoVisitante: "Central Córdoba (Santiago del Estero)", estadio: "Estadio Julio César Villagra", gl: 2, gv: 1 },
      { equipoLocal: "Lanús", equipoVisitante: "Estudiantes", estadio: "Estadio Ciudad de Lanús", gl: 2, gv: 1 },
      { equipoLocal: "Argentinos Juniors", equipoVisitante: "River Plate", estadio: "Estadio Diego Armando Maradona", gl: 1, gv: 0 },
      { equipoLocal: "Godoy Cruz", equipoVisitante: "San Lorenzo de Almagro", estadio: "Estadio Malvinas Argentinas", gl: 1, gv: 1 },
      { equipoLocal: "Newell's Old Boys", equipoVisitante: "Defensa y Justicia", estadio: "Estadio Marcelo Bielsa", gl: 1, gv: 0 },
      { equipoLocal: "Boca Juniors", equipoVisitante: "Talleres", estadio: "Estadio Alberto J. Armando", gl: 0, gv: 0 },
      { equipoLocal: "Huracán", equipoVisitante: "Instituto de Córdoba", estadio: "Estadio Tomás Adolfo Ducó", gl: 1, gv: 0 },
      { equipoLocal: "Sarmiento", equipoVisitante: "Independiente Rivadavia", estadio: "Estadio Eva Perón", gl: 0, gv: 1 },
      { equipoLocal: "Gimnasia La Plata", equipoVisitante: "Banfield", estadio: "Estadio Juan Carmelo Zerillo", gl: 3, gv: 0 },
      { equipoLocal: "Independiente", equipoVisitante: "Vélez Sarsfield", estadio: "Estadio Libertadores de América", gl: 1, gv: 1 },
      { equipoLocal: "Unión Santa Fe", equipoVisitante: "Barracas Central", estadio: "Estadio 15 de Abril", gl: 2, gv: 0 },
      { equipoLocal: "Atlético Tucumán", equipoVisitante: "Platense", estadio: "Estadio Monumental José Fierro", gl: 1, gv: 1 }
    ]
  },
  {
    fecha: "2024-06-01",
    partidos: [
      { equipoLocal: "Racing Club", equipoVisitante: "Deportivo Riestra", estadio: "Estadio Presidente Perón", gl: 1, gv: 0 },
      { equipoLocal: "Belgrano", equipoVisitante: "Argentinos Juniors", estadio: "Estadio Julio César Villagra", gl: 1, gv: 0 },
      { equipoLocal: "Vélez Sarsfield", equipoVisitante: "Atlético Tucumán", estadio: "Estadio José Amalfitani", gl: 1, gv: 1 },
      { equipoLocal: "Platense", equipoVisitante: "Boca Juniors", estadio: "Estadio Ciudad de Vicente López", gl: 1, gv: 0 },
      { equipoLocal: "Central Córdoba (Santiago del Estero)", equipoVisitante: "Talleres", estadio: "Estadio Alfredo Terrera", gl: 2, gv: 4 },
      { equipoLocal: "Rosario Central", equipoVisitante: "Lanús", estadio: "Estadio Gigante de Arroyito", gl: 1, gv: 1 },
      { equipoLocal: "Instituto de Córdoba", equipoVisitante: "Gimnasia La Plata", estadio: "Estadio Juan Domingo Perón", gl: 2, gv: 1 },
      { equipoLocal: "River Plate", equipoVisitante: "Tigre", estadio: "Estadio Monumental", gl: 3, gv: 1 },
      { equipoLocal: "San Lorenzo de Almagro", equipoVisitante: "Sarmiento", estadio: "Estadio Pedro Bidegain", gl: 0, gv: 1 },
      { equipoLocal: "Defensa y Justicia", equipoVisitante: "Independiente", estadio: "Estadio Norberto Tomaghello", gl: 0, gv: 0 },
      { equipoLocal: "Estudiantes", equipoVisitante: "Godoy Cruz", estadio: "Estadio Jorge Luis Hirschi", gl: 1, gv: 1 },
      { equipoLocal: "Barracas Central", equipoVisitante: "Huracán", estadio: "Estadio Claudio Chiqui Tapia", gl: 0, gv: 2 },
      { equipoLocal: "Banfield", equipoVisitante: "Newell's Old Boys", estadio: "Estadio Florencio Sola", gl: 2, gv: 0 },
      { equipoLocal: "Independiente Rivadavia", equipoVisitante: "Unión Santa Fe", estadio: "Estadio Bautista Gargantini", gl: 0, gv: 1 }
    ]
  },
  {
    fecha: "2024-06-12",
    partidos: [
      { equipoLocal: "Godoy Cruz", equipoVisitante: "Rosario Central", estadio: "Estadio Malvinas Argentinas", gl: 1, gv: 1 },
      { equipoLocal: "Argentinos Juniors", equipoVisitante: "Central Córdoba (Santiago del Estero)", estadio: "Estadio Diego Armando Maradona", gl: 2, gv: 1 },
      { equipoLocal: "Gimnasia La Plata", equipoVisitante: "Barracas Central", estadio: "Estadio Juan Carmelo Zerillo", gl: 2, gv: 1 },
      { equipoLocal: "Independiente", equipoVisitante: "Banfield", estadio: "Estadio Libertadores de América", gl: 2, gv: 1 },
      { equipoLocal: "Deportivo Riestra", equipoVisitante: "River Plate", estadio: "Estadio Guillermo Laza", gl: 2, gv: 0 },
      { equipoLocal: "Sarmiento", equipoVisitante: "Estudiantes", estadio: "Estadio Eva Perón", gl: 2, gv: 0 },
      { equipoLocal: "Tigre", equipoVisitante: "Belgrano", estadio: "Estadio José Dellagiovanna", gl: 1, gv: 1 },
      { equipoLocal: "Lanús", equipoVisitante: "Racing Club", estadio: "Estadio Ciudad de Lanús", gl: 2, gv: 0 },
      { equipoLocal: "Newell's Old Boys", equipoVisitante: "Instituto de Córdoba", estadio: "Estadio Marcelo Bielsa", gl: 0, gv: 2 },
      { equipoLocal: "Boca Juniors", equipoVisitante: "Vélez Sarsfield", estadio: "Estadio Alberto J. Armando", gl: 1, gv: 0 },
      { equipoLocal: "Talleres", equipoVisitante: "Platense", estadio: "Estadio Mario Alberto Kempes", gl: 2, gv: 1 },
      { equipoLocal: "Unión Santa Fe", equipoVisitante: "San Lorenzo de Almagro", estadio: "Estadio 15 de Abril", gl: 2, gv: 1 },
      { equipoLocal: "Huracán", equipoVisitante: "Independiente Rivadavia", estadio: "Estadio Tomás Adolfo Ducó", gl: 1, gv: 0 },
      { equipoLocal: "Atlético Tucumán", equipoVisitante: "Defensa y Justicia", estadio: "Estadio Monumental José Fierro", gl: 1, gv: 1 }
    ]
  },
  {
    fecha: "2024-07-18",
    partidos: [
      { equipoLocal: "Argentinos Juniors", equipoVisitante: "Tigre", estadio: "Estadio Diego Armando Maradona", gl: 0, gv: 2 },
      { equipoLocal: "Independiente Rivadavia", equipoVisitante: "Gimnasia La Plata", estadio: "Estadio Bautista Gargantini", gl: 1, gv: 0 },
      { equipoLocal: "Instituto de Córdoba", equipoVisitante: "Independiente", estadio: "Estadio Juan Domingo Perón", gl: 3, gv: 1 },
      { equipoLocal: "Barracas Central", equipoVisitante: "Newell's Old Boys", estadio: "Estadio Claudio Chiqui Tapia", gl: 0, gv: 1 },
      { equipoLocal: "Belgrano", equipoVisitante: "Deportivo Riestra", estadio: "Estadio Julio César Villagra", gl: 2, gv: 1 },
      { equipoLocal: "Rosario Central", equipoVisitante: "Sarmiento", estadio: "Estadio Gigante de Arroyito", gl: 4, gv: 2 },
      { equipoLocal: "San Lorenzo de Almagro", equipoVisitante: "Huracán", estadio: "Estadio Pedro Bidegain", gl: 1, gv: 1 },
      { equipoLocal: "Racing Club", equipoVisitante: "Godoy Cruz", estadio: "Estadio Presidente Perón", gl: 3, gv: 0 },
      { equipoLocal: "Banfield", equipoVisitante: "Atlético Tucumán", estadio: "Estadio Florencio Sola", gl: 1, gv: 1 },
      { equipoLocal: "River Plate", equipoVisitante: "Lanús", estadio: "Estadio Monumental", gl: 2, gv: 2 },
      { equipoLocal: "Central Córdoba (Santiago del Estero)", equipoVisitante: "Platense", estadio: "Estadio Alfredo Terrera", gl: 0, gv: 2 },
      { equipoLocal: "Estudiantes", equipoVisitante: "Unión Santa Fe", estadio: "Estadio Jorge Luis Hirschi", gl: 0, gv: 0 },
      { equipoLocal: "Defensa y Justicia", equipoVisitante: "Boca Juniors", estadio: "Estadio Norberto Tomaghello", gl: 2, gv: 2 },
      { equipoLocal: "Vélez Sarsfield", equipoVisitante: "Talleres", estadio: "Estadio José Amalfitani", gl: 3, gv: 0 }
    ]
  },
  {
    fecha: "2024-07-23",
    partidos: [
      { equipoLocal: "Deportivo Riestra", escudoLocal: "Escudo/Bandera Deportivo Riestra", equipoVisitante: "Argentinos Juniors", escudoVisitante: "Escudo/Bandera Argentinos Juniors", estadio: "Estadio Deportivo Riestra", gl: 2, gv: 0 },
      { equipoLocal: "Gimnasia La Plata", escudoLocal: "Escudo/Bandera Gimnasia La Plata", equipoVisitante: "San Lorenzo de Almagro", escudoVisitante: "Escudo/Bandera San Lorenzo de Almagro", estadio: "Estadio Juan Carmelo Zerillo", gl: 0, gv: 1 },
      { equipoLocal: "Newell's Old Boys", escudoLocal: "Escudo/Bandera Newell's Old Boys", equipoVisitante: "Independiente Rivadavia", escudoVisitante: "Escudo/Bandera Independiente Rivad.", estadio: "Estadio Marcelo Bielsa", gl: 0, gv: 0 },
      { equipoLocal: "Independiente", escudoLocal: "Escudo/Bandera Independiente", equipoVisitante: "Barracas Central", escudoVisitante: "Escudo/Bandera Barracas Central", estadio: "Estadio Libertadores de América", gl: 0, gv: 0 },
      { equipoLocal: "Talleres", escudoLocal: "Escudo/Bandera Talleres", equipoVisitante: "Defensa y Justicia", escudoVisitante: "Escudo/Bandera Defensa y Justicia", estadio: "Estadio Mario Alberto Kempes", gl: 1, gv: 1 },
      { equipoLocal: "Sarmiento", escudoLocal: "Escudo/Bandera Sarmiento", equipoVisitante: "Racing Club", escudoVisitante: "Escudo/Bandera Racing Club", estadio: "Estadio Eva Perón", gl: 1, gv: 0 },
      { equipoLocal: "Godoy Cruz", escudoLocal: "Escudo/Bandera Godoy Cruz", equipoVisitante: "River Plate", escudoVisitante: "Escudo/Bandera River Plate", estadio: "Estadio Malvinas Argentinas", gl: 2, gv: 1 },
      { equipoLocal: "Huracán", escudoLocal: "Escudo/Bandera Huracán", equipoVisitante: "Estudiantes", escudoVisitante: "Escudo/Bandera Estudiantes", estadio: "Estadio Tomás Adolfo Ducó", gl: 0, gv: 0 },
      { equipoLocal: "Lanús", escudoLocal: "Escudo/Bandera Lanús", equipoVisitante: "Belgrano", escudoVisitante: "Escudo/Bandera Belgrano", estadio: "Estadio Ciudad de Lanús", gl: 3, gv: 2 },
      { equipoLocal: "Platense", escudoLocal: "Escudo/Bandera Platense", equipoVisitante: "Vélez Sarsfield", escudoVisitante: "Escudo/Bandera Vélez Sarsfield", estadio: "Estadio Ciudad de Vicente López", gl: 0, gv: 2 },
      { equipoLocal: "Atlético Tucumán", escudoLocal: "Escudo/Bandera Atlético Tucumán", equipoVisitante: "Gimnasia La Plata", escudoVisitante: "Escudo/Bandera Gimnasia La Plata", estadio: "Estadio Monumental José Fierro", gl: 1, gv: 0 },
      { equipoLocal: "Tigre", escudoLocal: "Escudo/Bandera Tigre", equipoVisitante: "Central Córdoba (Santiago del Estero)", escudoVisitante: "Escudo/Bandera Central Córdoba (Santiago del Estero)", estadio: "Estadio José Dellagiovanna", gl: 1, gv: 1 },
      { equipoLocal: "Unión Santa Fe", escudoLocal: "Escudo/Bandera Unión Santa Fe", equipoVisitante: "Rosario Central", escudoVisitante: "Escudo/Bandera Rosario Central", estadio: "Estadio 15 de Abril", gl: 1, gv: 0 },
      { equipoLocal: "Boca Juniors", escudoLocal: "Escudo/Bandera Boca Juniors", equipoVisitante: "Banfield", escudoVisitante: "Escudo/Bandera Banfield", estadio: "Estadio Alberto J. Armando", gl: 3, gv: 0 }
    ]
  },
  {
    fecha: "2024-07-27",
    partidos: [
      { equipoLocal: "Independiente Rivadavia", escudoLocal: "Escudo/Bandera Independiente Rivad.", equipoVisitante: "Independiente", escudoVisitante: "Escudo/Bandera Independiente", estadio: "Estadio Bautista Gargantini", gl: 1, gv: 0 },
      { equipoLocal: "San Lorenzo de Almagro", escudoLocal: "Escudo/Bandera San Lorenzo de Almagro", equipoVisitante: "Newell's Old Boys", escudoVisitante: "Escudo/Bandera Newell's Old Boys", estadio: "Estadio Pedro Bidegain", gl: 1, gv: 1 },
      { equipoLocal: "Rosario Central", escudoLocal: "Escudo/Bandera Rosario Central", equipoVisitante: "Huracán", escudoVisitante: "Escudo/Bandera Huracán", estadio: "Estadio Gigante de Arroyito", gl: 0, gv: 1 },
      { equipoLocal: "Banfield", escudoLocal: "Escudo/Bandera Banfield", equipoVisitante: "Talleres", escudoVisitante: "Escudo/Bandera Talleres", estadio: "Estadio Florencio Sola", gl: 1, gv: 1 },
      { equipoLocal: "Estudiantes", escudoLocal: "Escudo/Bandera Estudiantes", equipoVisitante: "Gimnasia La Plata", escudoVisitante: "Escudo/Bandera Gimnasia La Plata", estadio: "Estadio Jorge Luis Hirschi", gl: 4, gv: 1 },
      { equipoLocal: "Racing Club", escudoLocal: "Escudo/Bandera Racing Club", equipoVisitante: "Unión Santa Fe", escudoVisitante: "Escudo/Bandera Unión Santa Fe", estadio: "Estadio Presidente Perón", gl: 2, gv: 1 },
      { equipoLocal: "River Plate", escudoLocal: "Escudo/Bandera River Plate", equipoVisitante: "Sarmiento", escudoVisitante: "Escudo/Bandera Sarmiento", estadio: "Estadio Monumental", gl: 1, gv: 0 },
      { equipoLocal: "Instituto de Córdoba", escudoLocal: "Escudo/Bandera Instituto de Córdoba", equipoVisitante: "Boca Juniors", escudoVisitante: "Escudo/Bandera Boca Juniors", estadio: "Estadio Juan Domingo Perón", gl: 0, gv: 0 },
      { equipoLocal: "Barracas Central", escudoLocal: "Escudo/Bandera Barracas Central", equipoVisitante: "Atlético Tucumán", escudoVisitante: "Escudo/Bandera Atlético Tucumán", estadio: "Estadio Claudio Chiqui Tapia", gl: 0, gv: 2 },
      { equipoLocal: "Defensa y Justicia", escudoLocal: "Escudo/Bandera Defensa y Justicia", equipoVisitante: "Platense", escudoVisitante: "Escudo/Bandera Platense", estadio: "Estadio Norberto Tomaghello", gl: 1, gv: 3 },
      { equipoLocal: "Central Córdoba (Santiago del Estero)", escudoLocal: "Escudo/Bandera Central Córdoba (Santiago del Estero)", equipoVisitante: "Vélez Sarsfield", escudoVisitante: "Escudo/Bandera Vélez Sarsfield", estadio: "Estadio Alfredo Terrera", gl: 0, gv: 2 },
      { equipoLocal: "Tigre", escudoLocal: "Escudo/Bandera Tigre", equipoVisitante: "Deportivo Riestra", escudoVisitante: "Escudo/Bandera Deportivo Riestra", estadio: "Estadio José Dellagiovanna", gl: 2, gv: 1 },
      { equipoLocal: "Argentinos Juniors", escudoLocal: "Escudo/Bandera Argentinos Juniors", equipoVisitante: "Lanús", escudoVisitante: "Escudo/Bandera Lanús", estadio: "Estadio Diego Armando Maradona", gl: 2, gv: 0 },
      { equipoLocal: "Belgrano", escudoLocal: "Escudo/Bandera Belgrano", equipoVisitante: "Godoy Cruz", escudoVisitante: "Escudo/Bandera Godoy Cruz", estadio: "Estadio Julio César Villagra", gl: 1, gv: 0 }
    ]
  },
  {
    fecha: "2024-08-06",
    partidos: [
      { equipoLocal: "Newell's Old Boys", escudoLocal: "Escudo/Bandera Newell's Old Boys", equipoVisitante: "Estudiantes", escudoVisitante: "Escudo/Bandera Estudiantes", estadio: "Estadio Marcelo Bielsa", gl: 1, gv: 4 },
      { equipoLocal: "Godoy Cruz", escudoLocal: "Escudo/Bandera Godoy Cruz", equipoVisitante: "Argentinos Juniors", escudoVisitante: "Escudo/Bandera Argentinos Juniors", estadio: "Estadio Malvinas Argentinas", gl: 1, gv: 0 },
      { equipoLocal: "Vélez Sarsfield", escudoLocal: "Escudo/Bandera Vélez Sarsfield", equipoVisitante: "Defensa y Justicia", escudoVisitante: "Escudo/Bandera Defensa y Justicia", estadio: "Estadio José Amalfitani", gl: 3, gv: 0 },
      { equipoLocal: "Talleres", escudoLocal: "Escudo/Bandera Talleres", equipoVisitante: "Instituto de Córdoba", escudoVisitante: "Escudo/Bandera Instituto de Córdoba", estadio: "Estadio Mario Alberto Kempes", gl: 1, gv: 1 },
      { equipoLocal: "Independiente", escudoLocal: "Escudo/Bandera Independiente", equipoVisitante: "San Lorenzo de Almagro", escudoVisitante: "Escudo/Bandera San Lorenzo de Almagro", estadio: "Estadio Libertadores de América", gl: 0, gv: 0 },
      { equipoLocal: "Huracán", escudoLocal: "Escudo/Bandera Huracán", equipoVisitante: "Racing Club", escudoVisitante: "Escudo/Bandera Racing Club", estadio: "Estadio Tomás Adolfo Ducó", gl: 0, gv: 0 },
      { equipoLocal: "Sarmiento", escudoLocal: "Escudo/Bandera Sarmiento", equipoVisitante: "Belgrano", escudoVisitante: "Escudo/Bandera Belgrano", estadio: "Estadio Eva Perón", gl: 0, gv: 0 },
      { equipoLocal: "Unión Santa Fe", escudoLocal: "Escudo/Bandera Unión Santa Fe", equipoVisitante: "River Plate", escudoVisitante: "Escudo/Bandera River Plate", estadio: "Estadio 15 de Abril", gl: 0, gv: 0 },
      { equipoLocal: "Boca Juniors", escudoLocal: "Escudo/Bandera Boca Juniors", equipoVisitante: "Barracas Central", escudoVisitante: "Escudo/Bandera Barracas Central", estadio: "Estadio Alberto J. Armando", gl: 1, gv: 1 },
      { equipoLocal: "Atlético Tucumán", escudoLocal: "Escudo/Bandera Atlético Tucumán", equipoVisitante: "Independiente Rivadavia", escudoVisitante: "Escudo/Bandera Independiente Rivadavia", estadio: "Estadio Monumental José Fierro", gl: 2, gv: 1 },
      { equipoLocal: "Lanús", escudoLocal: "Escudo/Bandera Lanús", equipoVisitante: "Tigre", escudoVisitante: "Escudo/Bandera Tigre", estadio: "Estadio Ciudad de Lanús", gl: 3, gv: 2 },
      { equipoLocal: "Deportivo Riestra", escudoLocal: "Escudo/Bandera Deportivo Riestra", equipoVisitante: "Central Córdoba (Santiago del Estero)", escudoVisitante: "Escudo/Bandera Central Córdoba (Santiago del Estero)", estadio: "Estadio Deportivo Riestra", gl: 1, gv: 0 },
      { equipoLocal: "Gimnasia La Plata", escudoLocal: "Escudo/Bandera Gimnasia La Plata", equipoVisitante: "Rosario Central", escudoVisitante: "Escudo/Bandera Rosario Central", estadio: "Estadio Juan Carmelo Zerillo", gl: 0, gv: 1 },
      { equipoLocal: "Platense", escudoLocal: "Escudo/Bandera Platense", equipoVisitante: "Banfield", escudoVisitante: "Escudo/Bandera Banfield", estadio: "Estadio Ciudad de Vicente López", gl: 0, gv: 1 }
    ]
  },
  {
    fecha: "2024-08-8",
    partidos: [
      { equipoLocal: "Argentinos Juniors", escudoLocal: "Escudo/Bandera Argentinos Juniors", equipoVisitante: "Sarmiento", escudoVisitante: "Escudo/Bandera Sarmiento", estadio: "Estadio Diego Armando Maradona", gl: 0, gv: 0 },
      { equipoLocal: "Deportivo Riestra", escudoLocal: "Escudo/Bandera Deportivo Riestra", equipoVisitante: "Lanús", escudoVisitante: "Escudo/Bandera Lanús", estadio: "Estadio Deportivo Riestra", gl: 3, gv: 1 },
      { equipoLocal: "Barracas Central", escudoLocal: "Escudo/Bandera Barracas Central", equipoVisitante: "Talleres", escudoVisitante: "Escudo/Bandera Talleres", estadio: "Estadio Claudio Chiqui Tapia", gl: 1, gv: 1 },
      { equipoLocal: "Belgrano", escudoLocal: "Escudo/Bandera Belgrano", equipoVisitante: "Unión Santa Fe", escudoVisitante: "Escudo/Bandera Unión Santa Fe", estadio: "Estadio Julio César Villagra", gl: 1, gv: 1 },
      { equipoLocal: "Racing Club", escudoLocal: "Escudo/Bandera Racing Club", equipoVisitante: "Gimnasia La Plata", escudoVisitante: "Escudo/Bandera Gimnasia La Plata", estadio: "Estadio Presidente Perón", gl: 0, gv: 1 },
      { equipoLocal: "San Lorenzo de Almagro", escudoLocal: "Escudo/Bandera San Lorenzo de Almagro", equipoVisitante: "Atlético Tucumán", escudoVisitante: "Escudo/Bandera Atlético Tucumán", estadio: "Estadio Pedro Bidegain", gl: 0, gv: 1 },
      { equipoLocal: "Rosario Central", escudoLocal: "Escudo/Bandera Rosario Central", equipoVisitante: "Newell's Old Boys", escudoVisitante: "Escudo/Bandera Newell's Old Boys", estadio: "Estadio Gigante de Arroyito", gl: 1, gv: 0 },
      { equipoLocal: "Independiente Rivadavia", escudoLocal: "Escudo/Bandera Independiente Rivadavia", equipoVisitante: "Boca Juniors", escudoVisitante: "Escudo/Bandera Boca Juniors", estadio: "Estadio Bautista Gargantini", gl: 1, gv: 1 },
      { equipoLocal: "River Plate", escudoLocal: "Escudo/Bandera River Plate", equipoVisitante: "Huracán", escudoVisitante: "Escudo/Bandera Huracán", estadio: "Estadio Monumental", gl: 1, gv: 1 },
      { equipoLocal: "Central Córdoba (Santiago del Estero)", escudoLocal: "Escudo/Bandera Central Córdoba (Santiago del Estero)", equipoVisitante: "Defensa y Justicia", escudoVisitante: "Escudo/Bandera Defensa y Justicia", estadio: "Estadio Alfredo Terrera", gl: 2, gv: 0 },
      { equipoLocal: "Instituto de Córdoba", escudoLocal: "Escudo/Bandera Instituto de Córdoba", equipoVisitante: "Platense", escudoVisitante: "Escudo/Bandera Platense", estadio: "Estadio Juan Domingo Perón", gl: 2, gv: 0 },
      { equipoLocal: "Banfield", escudoLocal: "Escudo/Bandera Banfield", equipoVisitante: "Vélez Sarsfield", escudoVisitante: "Escudo/Bandera Vélez Sarsfield", estadio: "Estadio Florencio Sola", gl: 2, gv: 2 },
      { equipoLocal: "Estudiantes", escudoLocal: "Escudo/Bandera Estudiantes", equipoVisitante: "Independiente", escudoVisitante: "Escudo/Bandera Independiente", estadio: "Estadio Jorge Luis Hirschi", gl: 0, gv: 2 },
      { equipoLocal: "Tigre", escudoLocal: "Escudo/Bandera Tigre", equipoVisitante: "Godoy Cruz", escudoVisitante: "Escudo/Bandera Godoy Cruz", estadio: "Estadio José Dellagiovanna", gl: 0, gv: 2 }
    ]
  },
  {
    fecha: "2024-08-23",
    partidos: [
      { equipoLocal: "Platense", escudoLocal: "Escudo/Bandera Platense", equipoVisitante: "Barracas Central", escudoVisitante: "Escudo/Bandera Barracas Central", estadio: "Estadio Ciudad de Vicente López", gl: 0, gv: 0 },
      { equipoLocal: "Newell's Old Boys", escudoLocal: "Escudo/Bandera Newell's Old Boys", equipoVisitante: "Racing Club", escudoVisitante: "Escudo/Bandera Racing Club", estadio: "Estadio Marcelo Bielsa", gl: 0, gv: 1 },
      { equipoLocal: "Lanús", escudoLocal: "Escudo/Bandera Lanús", equipoVisitante: "Central Córdoba (Santiago del Estero)", escudoVisitante: "Escudo/Bandera Central Córdoba (Santiago del Estero)", estadio: "Estadio Ciudad de Lanús", gl: 1, gv: 1 },
      { equipoLocal: "Independiente", escudoLocal: "Escudo/Bandera Independiente", equipoVisitante: "Rosario Central", escudoVisitante: "Escudo/Bandera Rosario Central", estadio: "Estadio Libertadores de América", gl: 1, gv: 0 },
      { equipoLocal: "Gimnasia La Plata", escudoLocal: "Escudo/Bandera Gimnasia La Plata", equipoVisitante: "River Plate", escudoVisitante: "Escudo/Bandera River Plate", estadio: "Estadio Juan Carmelo Zerillo", gl: 1, gv: 1 },
      { equipoLocal: "Talleres", escudoLocal: "Escudo/Bandera Talleres", equipoVisitante: "Independiente Rivadavia", escudoVisitante: "Escudo/Bandera Independiente Rivad.", estadio: "Estadio Mario Alberto Kempes", gl: 2, gv: 1 },
      { equipoLocal: "Vélez Sarsfield", escudoLocal: "Escudo/Bandera Vélez Sarsfield", equipoVisitante: "Instituto de Córdoba", escudoVisitante: "Escudo/Bandera Instituto de Córdoba", estadio: "Estadio José Amalfitani", gl: 1, gv: 0 },
      { equipoLocal: "Boca Juniors", escudoLocal: "Escudo/Bandera Boca Juniors", equipoVisitante: "San Lorenzo de Almagro", escudoVisitante: "Escudo/Bandera San Lorenzo de Almagro", estadio: "Estadio Alberto J. Armando", gl: 3, gv: 2 },
      { equipoLocal: "Atlético Tucumán", escudoLocal: "Escudo/Bandera Atlético Tucumán", equipoVisitante: "Estudiantes", escudoVisitante: "Escudo/Bandera Estudiantes", estadio: "Estadio Monumental José Fierro", gl: 2, gv: 0 },
      { equipoLocal: "Sarmiento", escudoLocal: "Escudo/Bandera Sarmiento", equipoVisitante: "Tigre", escudoVisitante: "Escudo/Bandera Tigre", estadio: "Estadio Eva Perón", gl: 0, gv: 0 },
      { equipoLocal: "Huracán", escudoLocal: "Escudo/Bandera Huracán", equipoVisitante: "Belgrano", escudoVisitante: "Escudo/Bandera Belgrano", estadio: "Estadio Tomás Adolfo Ducó", gl: 1, gv: 0 },
      { equipoLocal: "Godoy Cruz", escudoLocal: "Escudo/Bandera Godoy Cruz", equipoVisitante: "Deportivo Riestra", escudoVisitante: "Escudo/Bandera Deportivo Riestra", estadio: "Estadio Malvinas Argentinas", gl: 4, gv: 1 },
      { equipoLocal: "Unión Santa Fe", escudoLocal: "Escudo/Bandera Unión Santa Fe", equipoVisitante: "Argentinos Juniors", escudoVisitante: "Escudo/Bandera Argentinos Juniors", estadio: "Estadio 15 de Abril", gl: 3, gv: 0 },
      { equipoLocal: "Defensa y Justicia", escudoLocal: "Escudo/Bandera Defensa y Justicia", equipoVisitante: "Banfield", escudoVisitante: "Escudo/Bandera Banfield", estadio: "Estadio Norberto Tomaghello", gl: 1, gv: 0 }
    ]
  },
  {
    fecha: "2024-08-31",
    partidos: [
      { equipoLocal: "Sarmiento", escudoLocal: "Escudo/Bandera Sarmiento", equipoVisitante: "Lanús", escudoVisitante: "Escudo/Bandera Lanús", estadio: "Estadio Eva Perón", gl: 0, gv: 0 },
      { equipoLocal: "Unión Santa Fe", escudoLocal: "Escudo/Bandera Unión Santa Fe", equipoVisitante: "Deportivo Riestra", escudoVisitante: "Escudo/Bandera Deportivo Riestra", estadio: "Estadio 15 de Abril", gl: 0, gv: 0 },
      { equipoLocal: "Defensa y Justicia", escudoLocal: "Escudo/Bandera Defensa y Justicia", equipoVisitante: "Barracas Central", escudoVisitante: "Escudo/Bandera Barracas Central", estadio: "Estadio Norberto Tomaghello", gl: 1, gv: 0 },
      { equipoLocal: "Newell's Old Boys", escudoLocal: "Escudo/Bandera Newell's Old Boys", equipoVisitante: "Belgrano", escudoVisitante: "Escudo/Bandera Belgrano", estadio: "Estadio Marcelo Bielsa", gl: 0, gv: 0 },
      { equipoLocal: "Talleres", escudoLocal: "Escudo/Bandera Talleres", equipoVisitante: "Estudiantes", escudoVisitante: "Escudo/Bandera Estudiantes", estadio: "Estadio Mario Alberto Kempes", gl: 1, gv: 0 },
      { equipoLocal: "Vélez Sarsfield", escudoLocal: "Escudo/Bandera Vélez Sarsfield", equipoVisitante: "Independiente Rivadavia", escudoVisitante: "Escudo/Bandera Independiente Rivad.", estadio: "Estadio José Amalfitani", gl: 4, gv: 0 },
      { equipoLocal: "Boca Juniors", escudoLocal: "Escudo/Bandera Boca Juniors", equipoVisitante: "Rosario Central", escudoVisitante: "Escudo/Bandera Rosario Central", estadio: "Estadio Alberto J. Armando", gl: 2, gv: 1 },
      { equipoLocal: "Huracán", escudoLocal: "Escudo/Bandera Huracán", equipoVisitante: "Tigre", escudoVisitante: "Escudo/Bandera Tigre", estadio: "Estadio Tomás Adolfo Ducó", gl: 0, gv: 2 },
      { equipoLocal: "Platense", escudoLocal: "Escudo/Bandera Platense", equipoVisitante: "San Lorenzo de Almagro", escudoVisitante: "Escudo/Bandera San Lorenzo de Almagro", estadio: "Estadio Ciudad de Vicente López", gl: 1, gv: 2 },
      { equipoLocal: "Independiente", escudoLocal: "Escudo/Bandera Independiente", equipoVisitante: "River Plate", escudoVisitante: "Escudo/Bandera River Plate", estadio: "Estadio Libertadores de América", gl: 0, gv: 0 },
      { equipoLocal: "Atlético Tucumán", escudoLocal: "Escudo/Bandera Atlético Tucumán", equipoVisitante: "Racing Club", escudoVisitante: "Escudo/Bandera Racing Club", estadio: "Estadio Monumental José Fierro", gl: 1, gv: 0 },
      { equipoLocal: "Banfield", escudoLocal: "Escudo/Bandera Banfield", equipoVisitante: "Instituto de Córdoba", escudoVisitante: "Escudo/Bandera Instituto de Córdoba", estadio: "Estadio Florencio Sola", gl: 1, gv: 2 },
      { equipoLocal: "Gimnasia La Plata", escudoLocal: "Escudo/Bandera Gimnasia La Plata", equipoVisitante: "Argentinos Juniors", escudoVisitante: "Escudo/Bandera Argentinos Juniors", estadio: "Estadio Juan Carmelo Zerillo", gl: 1, gv: 0 },
      { equipoLocal: "Godoy Cruz", escudoLocal: "Escudo/Bandera Godoy Cruz", equipoVisitante: "Central Córdoba (Santiago del Estero)", escudoVisitante: "Escudo/Bandera Central Córdoba (Santiago del Estero)", estadio: "Estadio Malvinas Argentinas", gl: 1, gv: 1 }
    ]
  }
  
  
  
];

const Partidos = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Partidos del Campeonato - Fechas 1 a 10
      </Typography>
      {fechas.map((fecha, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom>
            Jornada {index + 1}: {fecha.fecha}
          </Typography>
          <List>
            {fecha.partidos.map((partido, partidoIndex) => (
              <ListItem key={partidoIndex}>
                <ListItemText
                  primary={`${partido.equipoLocal} ${partido.gl} - ${partido.gv} ${partido.equipoVisitante}`}
                  
                />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default Partidos;

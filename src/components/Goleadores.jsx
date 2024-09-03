import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

interface GoleadoresProps {  
  setTotalGoles: React.Dispatch<React.SetStateAction<number>>;
}

function Counter({ id, value, name, onIncrement }) {
  useEffect(() => {
    document.title = `Counter ${name}: ${value}`;
  }, [id, value]); // El efecto se ejecuta cada vez que el id o el value cambian

  return (
    <div>
      <p>{name}: {value}
        <Button onClick={() => onIncrement(id)}>
          <AddIcon />
        </Button>
      </p>
    </div>
  );
}

export default function Goleadores(props: GoleadoresProps) {
  const { counters, setCounters } = props;
  const [newCounterName, setNewCounterName] = useState('');
  const [newCounterValue, setNewCounterValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [updateMessage, setUpdateMessage] = useState(false); // Estado para el mensaje de actualización

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const incrementCounter = (id) => {
    setCounters(counters.map(counter => 
      (counter.id === id ? { ...counter, value: counter.value + 1} : counter)      
    ));
    setUpdateMessage(true); // Mostrar el mensaje de tabla actualizada
  };

  const addCounter = () => {
    const parsedValue = parseInt(newCounterValue, 10) || 0;

    if (parsedValue <= 0) {
      alert("La cantidad de goles debe ser mayor a 0.");
      return;
    }

    const newId = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
    const newName = newCounterName.trim() !== '' ? newCounterName : `Counter ${newId}`;
    
    setCounters([...counters, { id: newId, value: parsedValue, name: newName }]);
    setNewCounterName('');
    setNewCounterValue(0);
    setUpdateMessage(true); // Mostrar el mensaje de tabla actualizada
    handleClose();
  };

  // useEffect para manejar la visibilidad del mensaje
  useEffect(() => {
    if (updateMessage) {
      const timer = setTimeout(() => {
        setUpdateMessage(false); // Ocultar mensaje después de 3 segundos
      }, 3000);
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta o si el efecto se ejecuta de nuevo
    }
  }, [updateMessage]); // Dependencia correcta: solo en updateMessage

  // Ordenar los contadores de mayor a menor valor
  const sortedCounters = [...counters].sort((a, b) => b.value - a.value);

  return (
    <div>
      <h1>Lista de Goleadores</h1>
      {updateMessage && <p style={{ color: 'blue' }}>Tabla actualizada</p>} {/* Mensaje de tabla actualizada */}
      {sortedCounters.map(counter => (
        <Counter 
          key={counter.id} 
          id={counter.id} 
          value={counter.value} 
          name={counter.name} 
          onIncrement={incrementCounter} 
        />
      ))}
      <Button variant="outlined" onClick={handleClickOpen}>
        Agregar goleador
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Añadir un nuevo contador</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={newCounterName}
            onChange={(e) => setNewCounterName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Goles"
            type="number"
            fullWidth
            value={newCounterValue}
            onChange={(e) => setNewCounterValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={addCounter}>Añadir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

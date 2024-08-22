import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';

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
      <button onClick={() => onIncrement(id)}>
        <AddIcon />
      </button>
      </p>
    </div>
  );
}

export default function Goleadores(props: GoleadoresProps) {
  const { counters, setCounters } = props;

  const [newCounterName, setNewCounterName] = useState('');

  const incrementCounter = (id) => {
    setCounters(counters.map(counter => 
      (counter.id === id ? { ...counter, value: counter.value + 1} : counter)      
    ));
    
  };

  const addCounter = () => {
    const newId = counters.length > 0 ? counters[counters.length - 1].id + 1 : 1;
    const newName = newCounterName.trim() !== '' ? newCounterName : `Counter ${newId}`;
    setCounters([...counters, { id: newId, value: 0, name: newName }]);
    setNewCounterName(''); // Reset the input field after adding a new counter
  };
 
    // Ordenar los contadores de mayor a menor valor
    const sortedCounters = [...counters].sort((a, b) => b.value - a.value);

  return (
    <div>
      <h1>Lista de Goleadores</h1>
      {sortedCounters.map(counter => (
        <Counter 
          key={counter.id} 
          id={counter.id} 
          value={counter.value} 
          name={counter.name} 
          onIncrement={incrementCounter} 
        />
      ))}
      <div>
        <input
          type="text"
          value={newCounterName}
          onChange={(e) => setNewCounterName(e.target.value)}
          placeholder="Enter counter name"
          style={{ marginRight: '0.1%', padding: '0.5%' }}
        />
        <button onClick={addCounter}>Add Counter</button>
      </div>      
    </div>
  );
}
import React, { useState, useEffect } from 'react';

interface GoleadoresProps {  
  setTotalGoles: React.Dispatch<React.SetStateAction<number>>;
}

function Counter({ id, value, name, onIncrement }) {
  useEffect(() => {
    document.title = `Counter ${name}: ${value}`;
  }, [id, value]); // El efecto se ejecuta cada vez que el id o el value cambian

  return (
    <div>
      <p>{name}: {value}</p>
      <button onClick={() => onIncrement(id)}>Incrementar</button>
    </div>
  );
}

export default function Goleadores(props: GoleadoresProps) {
  const { counters, setCounters } = props;
  /*const [counters, setCounters] = useState([
    { id: 1, value: 0, name: 'Cavani' },
    { id: 2, value: 0, name: 'Medina'  },
    { id: 3, value: 0, name: 'Merentiel'  },
  ]);
  */
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
 

  return (
    <div>
      <h1>Lista de Goleadores</h1>
      {counters.map(counter => (
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
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={addCounter}>Add Counter</button>
      </div>      
    </div>
  );
}

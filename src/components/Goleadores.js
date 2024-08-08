import React, { useState, useEffect } from 'react';

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

function Goleadores() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, name: 'Cavani' },
    { id: 2, value: 0, name: 'Medina'  },
    { id: 3, value: 0, name: 'Merentiel'  },
  ]);

  const incrementCounter = (id) => {
    setCounters(counters.map(counter => 
      counter.id === id ? { ...counter, value: counter.value + 1 } : counter
    ));
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
    </div>
  );
}

export default Goleadores;
import TridenteItemNuevo from './TridenteItemNuevo';
import '../index.css';

function Tridente({counters}) {
  return (
    <div className="contenedor">      
      {counters.map((counters) => (
        <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
  );
}

export default Tridente;
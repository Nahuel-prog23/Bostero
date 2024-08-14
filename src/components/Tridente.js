import TridenteItemNuevo from './TridenteItemNuevo';
import '../index.css';

function Tridente({counters}) {
  return (
    <div className="contenedor">      
      {counters.map((counters) => (
        counters.img && <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
  );
}

export default Tridente;
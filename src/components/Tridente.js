import TridenteItemNuevo from './TridenteItemNuevo';
import Countdown from './Countdown';
import '../index.css';

function Tridente({counters}) {
  return (  
    <>  
      <h2>A que hora juega Boquita: Jueves 15 de Agosto</h2>
      <Countdown targetDate="2024-08-15T21:30:00" />
   
    <div className="contenedor">  
      {counters.map((counters) => (
        counters.img && <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
    </>
  );
}

export default Tridente;
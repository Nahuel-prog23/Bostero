import TridenteItemNuevo from './TridenteItemNuevo';
import Countdown from './Countdown';
import '../index.css';

function Tridente({counters}) {
  return (  
    <>  
      <h2>A que hora juega Boquita: Lunes 26 de Agosto 21:00</h2>
      <Countdown targetDate="2024-08-26T21:00:00" />
   
    <div className="contenedor">  
      {counters.map((counters) => (
        counters.img && <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
    </>
  );
}

export default Tridente;
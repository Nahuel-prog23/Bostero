import TridenteItemNuevo from './TridenteItemNuevo';
import Countdown from './Countdown';
import '../index.css';

function Tridente({counters}) {
  return (  
    <>  
      <h2>A que hora juega Boca: Sábado 7 de sptiembre 20:00</h2>
      <Countdown targetDate="2024-09-07T20:00:00" />
   
    <div className="contenedor">  
      {counters.map((counters) => (
        counters.img && <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
    </>
  );
}

export default Tridente;
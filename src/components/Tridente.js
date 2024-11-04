import TridenteItemNuevo from './TridenteItemNuevo';
import Countdown from './Countdown';
import '../index.css';

function Tridente({counters}) {
  return (  
    <>  
      <h2>A que hora juega Boca: Miércoles 6 de Noviembre 19:30</h2>
      <Countdown targetDate="2024-11-06T19:30:00" />
   
    <div className="contenedor">  
      {counters.map((counters) => (
        counters.img && <TridenteItemNuevo key={counters.id}  player={counters}/>
      ))}    
    </div>
    </>
  );
}

export default Tridente;
import Cavani from '../img/Cavani.jpg';
import Medina from '../img/Medina.jpg';
import Merentiel from '../img/Merentiel.jpg';
import '../index.css';

function Tridente({counters}) {
  return (
    <div className="contenedor">      
      <div className="caja">
        <img src={Cavani}/>
        <div className="nombre">{counters[0].name}</div>
        <div className="nombre">{counters[0].value}</div>
      </div>
      <div className="caja">
        <img src={Medina}/>
        <div className="nombre">{counters[1].name}</div>
        <div className="nombre">{counters[1].value}</div>
      </div>
      <div className="caja">
        <img src={Merentiel}/>
        <div className="nombre">{counters[2].name}</div>
        <div className="nombre">{counters[2].value}</div>
      </div>    
    </div>
  );
}

export default Tridente;
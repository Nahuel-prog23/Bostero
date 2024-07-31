import Cavani from '../img/Cavani.jpg';
import Medina from '../img/Medina.jpg';
import Merentiel from '../img/Merentiel.jpg';
import '../index.css';

function Tridente() {
  let nombres=["Cavani", "Medina", "Merentiel"]
  return (
    <div className="contenedor">
      <div className="caja">
        <img src={Cavani}/>
        <div className="nombre">{nombres[0]}</div>
      </div>
      <div className="caja">
        <img src={Medina}/>
        <div className="nombre">{nombres[1]}</div>
      </div>
      <div className="caja">
        <img src={Merentiel}/>
        <div className="nombre">{nombres[2]}</div>
      </div>    
    </div>
  );
}

export default Tridente;
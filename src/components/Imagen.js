
import imagenMaradona from '../img/Maradona.jpg';
import imagenSuperman from '../img/Superman.jpg';

export default function Imagen({toogle}){
  //console.log(toogle)  
  return (     
             <img  src={toogle ? imagenMaradona: imagenSuperman}/>
       );
}
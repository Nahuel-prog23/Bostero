import React from "react";

import Imagen from './Imagen';
import Boton from './Boton';
import '../App.css';

export default function Contenedor () {
    const [isMaradona,setIsMaradona] = React.useState(true);
    const [name,setName] = React.useState("Cambiar a Kalel");
    const handleClick=()=>{
        //console.log("isMaradone true")
     setIsMaradona(!isMaradona)
     setName(name=="Cambiar a Kalel"?"Cambiar a Maradona":"Cambiar a Kalel")
    } 

    return (
        <div className="contenedor">  
           <div>
             <div><Imagen toogle={isMaradona}/></div>
             <Boton onHandleClick={handleClick} name={name}/>               
           </div>  
         </div> 
       );
}
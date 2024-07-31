import React from "react";
import Button from '@mui/material/Button';
export default function Boton ({onHandleClick,name}) {
    return (<>
             <div className="justBot">        
             <button onClick={onHandleClick}>{name}</button>
             </div>              
             </>
       );
}
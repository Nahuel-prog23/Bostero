import React from 'react'
import TridenteItem from './TridenteItem';
import '../../index.css';


export default function TridenteNegro(props) {
    const {players} = props;
  return (
    <>
      <h2>Tridente Negro</h2>
      <div className="contenedor">      
      {players.map((player) => (
        <TridenteItem key={player.id}  player={player}/>
      ))}
      </div>
    </>
  )
}

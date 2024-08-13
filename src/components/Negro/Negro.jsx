import React from 'react'
import TridenteNegro from './TridenteNegro'

export default function Negro() {
    const players = [ {
        id: 1,
        img: "/img/Cavani.jpg",
        name: 'Cavani',
        score: 0,
      },
      {
        id: 2,
        img:"/img/Medina.jpg",
        name: 'Medina',
        score: 0,   
      },
      {
        id: 3,
        img:"/img/Merentiel.jpg",
        name: 'Merentiel',  
        score: 0,
      } ];
    
  return (
    <>
      <h1>Page Negro</h1>
      <TridenteNegro players={players}/>
    </>
  )
}

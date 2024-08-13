import React from "react";
import '../../index.css';

export default function TridenteItem(props) {
  const { player } = props;
  return (
      <div className="caja">
        <img src={player.img} alt={player.name} />
        <div className="nombre">{player.name}</div>
        <div className="nombre">{player.score}</div>
      </div>
  );
}

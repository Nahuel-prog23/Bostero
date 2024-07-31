//import './App.css';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function Goleadores() {
  
  const numbers = [1, 2, 3, 4, 5];
  const jugadores = [{name:"Edison Cavani",goles:13},
    {name:"Miguel Merentiel",goles:11},
    {name:"Kevin Zenon",goles:4},
    {name:"Cristian Medina",goles:2}];
  const resultado1=jugadores.filter(valor=>valor.goles>=0).
  map(valor=>
    <div>{valor.name}
    : Goles {valor.goles}
    </div>
  )

  return (
    <div className="Caja">
    {resultado1}
    </div>
  );


}

export default Goleadores;
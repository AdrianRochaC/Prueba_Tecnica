import "./App.css";
import Color from "./Color";
import Cambiartexto from "./Cambiotexto";
import Validar from "./Validarnumero";
import Mostrar_objeto from "./Mostrarobjeto";
import Lista from "./Mostrarlista";

function App() {
  return (
    <div>
      <h1>Cambiar Color</h1>
      <Color />
      <h1>Cambiar 3 Textos</h1>
      <Cambiartexto />
      <h1>Validar número mayor a 10</h1>
      <Validar />
      <h1>Mostrar Objeto</h1>
      <Mostrar_objeto />
      <h1>Mostrar Lista</h1>
      <Lista />
    </div>
  );
}

export default App;

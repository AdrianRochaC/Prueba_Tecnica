import { useState } from "react";

function Lista() {
  const [tecnologia, setTecnologia] = useState([
    "Celular",
    "Portatil",
    "Televisor",
    "Tablet",
    "Reloj Inteligente",
  ]);

  return (
    <div>
      <h3>Lista de Nombres: </h3>
      <ul>
        {tecnologia.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;

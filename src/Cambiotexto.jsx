import { useState } from "react";

function Cambiartexto() {
  const [usuario, setUsuario] = useState({
    texto1: "Buenas tardes",
    texto2: "Profesor",
    texto3: "React",
  });

  function cambiarTexto1(parametro) {
    setUsuario({ ...usuario, texto1: parametro.target.value });
  }

  function cambiarTexto2(parametro) {
    setUsuario({ ...usuario, texto2: parametro.target.value });
  }

  function cambiarTexto3(parametro) {
    setUsuario({ ...usuario, texto3: parametro.target.value });
  }

  return (
    <div>
      <h3>{usuario.texto1}</h3>
      <h3>{usuario.texto2}</h3>
      <h3>{usuario.texto3}</h3>

      <input type="text" value={usuario.texto1} onChange={cambiarTexto1} />
      <input type="text" value={usuario.texto2} onChange={cambiarTexto2} />
      <input type="text" value={usuario.texto3} onChange={cambiarTexto3} />
    </div>
  );
}

export default Cambiartexto;

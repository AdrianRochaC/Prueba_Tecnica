import React, { useState } from "react";

function Mostrar_objeto() {
  const [usuario, setUsuario] = useState({
    nombre: "Adrian",
    apellido: "Rocha",
    edad: 18,
    carrera: "Desarrollo de Software"
  });

  const [mostrar, setMostrar] = useState(false); // Nuevo estado para controlar la visibilidad

  function mostrarObjeto() {
    setMostrar(!mostrar); // Cambia el estado de visibilidad al hacer clic
  }

  return (
    <div>
      <button onClick={mostrarObjeto}>Mostrar Objeto</button>
      {mostrar && (
        <>
          <h3>Nombre: {usuario.nombre}</h3>
          <h3>Apellido: {usuario.apellido}</h3>
          <h3>Edad: {usuario.edad}</h3>
          <h3>Carrera: {usuario.carrera}</h3>
        </>
      )}
    </div>
  );
}

export default Mostrar_objeto;

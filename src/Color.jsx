import { useState } from "react";

function Color() {
  function Cambiar() {
    document.body.classList.toggle("verde");
  }
  return <button onClick={Cambiar}>Cambiar Color Fondo</button>;
}

export default Color;

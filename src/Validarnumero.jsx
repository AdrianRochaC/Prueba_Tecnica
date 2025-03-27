import React, { useState } from "react";

const Validar = () => {
  const [number, setNumber] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  const validateNumber = () => {
    const parsedNumber = parseFloat(number);

    if (isNaN(parsedNumber)) {
      setResultMessage("Por favor, ingrese un número válido.");
      return;
    }

    if (parsedNumber >= 10) {
      setResultMessage(`${parsedNumber} es mayor que 10.`);
    } else {
      setResultMessage(`${parsedNumber} es menor que 10.`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese un número"
        value={number}
        onChange={handleInputChange}
      />
      <button onClick={validateNumber}>Validar</button>

      {resultMessage && <div>{resultMessage}</div>}
    </div>
  );
};

export default Validar;

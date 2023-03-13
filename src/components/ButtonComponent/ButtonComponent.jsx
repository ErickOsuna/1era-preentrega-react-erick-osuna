import React from 'react';
import "./style.css";

export const ButtonComponent = ({clickEvent, label = "Botón Por Defecto"}) => {
  return (
    <button onClick={clickEvent}>{label}</button>
  )
}

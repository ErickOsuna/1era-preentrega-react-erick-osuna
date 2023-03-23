import React from 'react';
import "./style.css";

export const ButtonComponent = ({clickEvent, label = "Botón Por Defecto"}) => {
  
  const [state, setState] = React.useState (0);

  const handleMoreClick = () =>{
    setState(state + 1)
  }

  const handleLessClick = () =>{
    if (state === 0) return;
    setState(state - 1)
  }

  return (
    <>
     <div>{state}</div>
     <button onClick={handleMoreClick}>Agregar +</button>
     <button onClick={handleLessClick}>Agregar -</button>
     <button onClick={clickEvent} className='buttonComponent'>{label}</button>
    </>
  )
}
import React from 'react'

export const ButtonComponent = ({clickEvent, label = "Botón Por Defecto"}) => {
  return (
    <button onClick={clickEvent}>{label}</button>
  )
}

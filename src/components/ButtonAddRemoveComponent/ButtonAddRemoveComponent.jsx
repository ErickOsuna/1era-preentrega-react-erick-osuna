import React from 'react'
import style from "./style.css"

export const ButtonAddRemoveComponent = () => {

  const [state, setState] = React.useState(0);

  const handleMoreClick = () => {
    setState(state + 1)
  }

  const handleLessClick = () => {
    if (state === 0) return;
    setState(state - 1)
  }

  return (
    <div className='buttonAddRemove'>
      <button onClick={handleMoreClick} className='buttonAdd'>+</button>
      <div>{state}</div>
      <button onClick={handleLessClick} className='buttonRemove'>-</button>
    </div>
  )
}

import React from 'react'
import carrito from "../../img/carrito.png"

export const CartWidgetComponent = () => {
  return (
    <div>
      <a href='#'><img src={carrito} alt="cartWidget" /></a>
      <p>5</p>
    </div>
  )
}

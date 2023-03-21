import React from 'react';
import carrito from "../../img/carrito.png";
import "./style.css";

export const CartWidgetComponent = () => {
  return (
    <div>
      <div className='cartWidgetContainer'>
        <a href='/cart-widget'><img src={carrito} alt="cartWidget" className='cartIcon'/></a>
        <p className='counter'>5</p>
      </div>
    </div>
  )
}

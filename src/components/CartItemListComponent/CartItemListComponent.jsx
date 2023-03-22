import React from 'react'
import style from "./style.css"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent"
import almacenamiento01 from "../../img/almacenamiento01.jpg"

export const CartItemListComponent = () => {
  return (
    <div className='cartItemList'>
      <p className='cartEmpty'>Tu carrito está vacío.</p>
      <div className='cartProducts'>
        <div className="cartProduct">
          <img src={almacenamiento01} alt="" />
          <div className="cartProducttitle">
            <p>Título</p>
            <h3>Almacenamiento 01</h3>
          </div>
          <div className="cartProductQuantity">
            <p>Cantidad</p>
            <p>1</p>
          </div>
          <div className="cartProductPrice">
            <p>Precio</p>
            <p>$ 1000</p>
          </div>
          <div className="cartProductSubTotal">
            <p>Subtotal</p>
            <p>$ 1000</p>
          </div>
          <button className='cartProductRemove'></button>
          <ButtonComponent label='Eliminar' className='cartProductRemove'/>
        </div>
      </div>
      <div className="cartActions">
        <div className="cartLeftActions">
          <ButtonComponent className='cartActionsRemove' label='Vaciar Carrito' />
        </div>
        <div className="cartRightActions">
          <div className="cartActionsTotal">
            <p>Total:</p>
            <p id='total'>$ 3000</p>
          </div>
          <ButtonComponent className='cartActionsBuy' label='Comprar Ahora' />
        </div>
      </div>
    </div>
  )
}

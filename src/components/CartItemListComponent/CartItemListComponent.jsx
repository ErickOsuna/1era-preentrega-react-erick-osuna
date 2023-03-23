import React from 'react'
import style from "./style.css"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent"
import almacenamiento01 from "../../img/almacenamiento01.jpg"

export const CartItemListComponent = () => {
  return (
    <div className='cartItemList'>
      <p className='cartEmpty'>Tu carrito está vacío.</p>
      <div className='cartProducts disabled'>
        <div className="cartProduct">
          <img src={almacenamiento01} alt="" className='cartProductImage'/>
          <div className="cartProducttitle">
            <p className='small'>Título</p>
            <h3 className='textProduct'>Almacenamiento 01</h3>
          </div>
          <div className="cartProductQuantity">
            <p className='small'>Cantidad</p>
            <p className='textProduct'>1</p>
          </div>
          <div className="cartProductPrice">
            <p className='small'>Precio</p>
            <p className='textProduct'>$ 1000</p>
          </div>
          <div className="cartProductSubTotal">
            <p className='small'>Subtotal</p>
            <p className='textProduct'>$ 1000</p>
          </div>
          <button className='cartProductRemove'>Eliminar</button>
        </div>
      </div>
      <div className="cartActions disabled">
        <div className="cartLeftActions">
          <button className='cartActionsRemove'>Vaciar Carrito</button>
        </div>
        <div className="cartRightActions">
          <div className="cartActionsTotal">
            <p>Total:</p>
            <p id='total'>$ 3000</p>
          </div>
          <button className='cartActionsBuy'>Comprar Ahora</button>
        </div>
      </div>
      <p className='thanks disabled'>Muchas gracias por tu compra.</p>
    </div>
  )
}

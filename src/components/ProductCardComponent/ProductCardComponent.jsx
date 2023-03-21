import React from 'react';
import "./style.css";
import almacenamiento01 from "../../img/almacenamiento01.jpg";

export const ProductCardComponent = () => {
  return (
    <div className='productCard'>
      <img src={almacenamiento01} alt="" />
      <p>Almacenamiento</p>
      <p>$ 1000</p>
      <button>Agregar</button>

    </div>
  )
}

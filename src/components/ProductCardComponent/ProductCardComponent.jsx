import React from 'react'
import { useState, useEffect } from 'react';
import "./style.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { ButtonAddRemoveComponent } from '../ButtonAddRemoveComponent/ButtonAddRemoveComponent';

export const ProductCardComponent = () => {

  const [data, setData] = useState([]);

  function traerProductos() {
    fetch("Productos.json")
      .then(respuesta => respuesta.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    traerProductos()

  }, []);

  return (
    <>
      {
        data.map((e) =>
          <div className="productCard" key={e.id}>
            <a href={e.id}><img src={e.imagen} alt="" className='productImage' /></a>
            <div className='productCardInfo'>
              <div className='productInfoName'>{e.titulo}</div>
              <div className='productInfoPrice'>ARS $ {e.precio}</div>
              <a className='details' href={e.id}>Detalle del Producto</a>
              <ButtonAddRemoveComponent />
              <ButtonComponent label='Añadir al Carrito' />
            </div>
          </div>
        )
      }
    </>
  )
}
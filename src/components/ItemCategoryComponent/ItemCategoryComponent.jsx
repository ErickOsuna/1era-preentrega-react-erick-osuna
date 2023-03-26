import React from 'react'
import style from "./style.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { products } from '../../data/products';
import { ButtonAddRemoveComponent, ButtonComponent } from '../../components'

export const ItemCategoryComponent = () => {

  const { id } = useParams();
  const [items, setItems] = useState(products);

  function traerProductos() {
    fetch("products.js")
      .then(respuesta => respuesta.json())
      .then(json => setItems(json))
  }

  useEffect(() => {
    traerProductos()

  }, []);


  const resultado = items.filter(e => e.categoria.id === id);


  return (
    <div className='itemListContainer'>
      {
        resultado.map(e =>
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
    </div>
  )
}

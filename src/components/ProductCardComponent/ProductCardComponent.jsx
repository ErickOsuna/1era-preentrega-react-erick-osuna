import React from 'react'
import { useState, useEffect } from 'react';
import "./style.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { ButtonAddRemoveComponent } from '../ButtonAddRemoveComponent/ButtonAddRemoveComponent';
import { useParams } from "react-router-dom";

export const ProductCardComponent = () => {

  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  function traerProductos() {
    fetch("Productos.json")
      .then(respuesta => respuesta.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    traerProductos();

    // setTimeout(()=>{

    //   set

    // })

  }, []);

  useEffect(() => {
    traerProductos();
    if (categoryId !== undefined) {
      console.log(data)
    }

  }, [categoryId])
  console.log(data)
  // console.log(data[0].categoria.id);

  return data === undefined ? (
    <div>Loading...</div>
  ) : (
    <>
      {
        data.map((e) =>
          <div className="productCard" key={e.id}>
            <img src={e.imagen} alt="" className='productImage' />
            <div className='productCardInfo'>
              <div className='productInfoName'>{e.titulo}</div>
              <div className='productInfoPrice'>ARS $ {e.precio}</div>
              <ButtonAddRemoveComponent />
              <ButtonComponent label='Añadir al Carrito' />
            </div>
          </div>
        )
      }
    </>
  )
}
import React from 'react'
import { useState, useEffect } from 'react';
import "./style.css";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";

export const ProductCardComponent = () => {

  const [data, setData] = useState([]);

  function traerProductos() {
    fetch("Productos.json")
      .then(respuesta => respuesta.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    traerProductos()
    console.log(data);
  }, []);

  // const navigate = useNavigate ();

  // const handleNavigateProduct = () => {
  //   navigate(`/products/${PRODUCTS.id}`)
  // }



  return (
    <>
      {
        data.map((e) =>
          <div className="productCard" key={e.id}>
            <img src={e.imagen} alt="" className='productImage' />
            <div className='productCardInfo'>
              <div className='productInfoName'>{e.titulo}</div>
              <div className='productInfoPrice'>ARS $ {e.precio}</div>
              <ButtonComponent label='Agregar' />
            </div>
            {/* <button onClick={handleNavigateProduct}>Ir a Detalles</button> */}
          </div>
        )
      }
    </>
  )
}
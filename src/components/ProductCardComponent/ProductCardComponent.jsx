import React from 'react'
import { useState, useEffect } from 'react';
import "./style.css";
import { ButtonComponent} from "../ButtonComponent/ButtonComponent";

export const ProductCardComponent = () => {

  const [data, setData] = useState([]);

  function traerProductos() {
    fetch("Productos.json")
      .then(respuesta => respuesta.json())
      .then(json => setData(json))
  }

  useEffect ( () => {
    traerProductos()
    console.log(data);
  }, []);


  return (
      <>
        {
          data.map((e)=>
          <div className="productCard" key={e.id}>
            <img src={e.imagen} alt="Aquí debe mostrar la Foto" className='productImage'/>
            <div className='productInfoName'>{e.titulo}</div>
            <div className='productInfoPrice'>{e.precio}</div>
            <ButtonComponent label='Agregar'/>
          </div>
          )
        }
      </>
  )
}
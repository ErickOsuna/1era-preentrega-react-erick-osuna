import React from 'react'
import style from "./style.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ItemCategoryComponent = () => {

  const { categoryId } = useParams();

  const [data, setData] = useState([]);

  function traerProductos() {
    fetch("Productos.json")
      .then(respuesta => respuesta.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    traerProductos()

  }, []);


  const resultado = data.filter(e => e.categoria.id === categoryId);

  console.log(resultado);

  return (
    <>
      {
        resultado.map((e) =>
          <div className="productCard" key={e.id}>
            <img src={e.imagen} alt="" className='productImage' />
            <div className='productCardInfo'>
              <div className='productInfoName'>{e.titulo}</div>
              <div className='productInfoPrice'>ARS $ {e.precio}</div>
            </div>
          </div>
        )
      }
    </>
  )
}

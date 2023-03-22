import React, { useState, useEffect } from 'react';
import "./style.css";
import {PRODUCTS} from "../../products/products";

export const ProductCardComponent = () => {

  const [data, setData] = useState([]);

  const url = {PRODUCTS};

  function traerProductos() {
    fetch(url)
      .then(respuesta => respuesta.json())

      .then(json => 
        JSON.parse(setData(json))
      )
  }

  useEffect ( () => {
    traerProductos ();
  }, []);


  return (
    // <div className='productCard'>

    //   {/* <img src={almacenamiento01} alt="" className='productImage' />
    //   <div className='productInfo'> */}
    //     {/* <p className='productInfoName'>Notebook Lenovo V15-IGL 15.6" PENTIUM N5030 4GB 1TB HDD Freedos</p>
    //     <p className='productInfoPrice'>$ 1000</p>
    //     <ButtonComponent /> */}
    //   {/* </div> */}
    //   </div>
      <div>
        {
          data.map((e)=>
          <div className="productCard" key={e.id}>
            <span>{e.titulo}</span>
            <span>{e.precio}</span>
          </div>
          )
        }
      </div>
  )
}



// import React, { useState, useEffect } from 'react'

// export const ProductCardComponent = () => {
//   const [data, setData] = useState([]);
//   const url = 'https://fakestoreapi.com/products';
//   function callProductos() {
//     fetch(url)
//       .then(res => res.json())
//       .then(json => setData(json))
//       .catch((err) => { console.log(err) })
//   }

//   useEffect(() => { callProductos(); }, []);

//   console.log(data);
//   return (
//     <>
//       {data.map(e =>
//         <div className='cardStyles' key={e.id}>
//           <div >
//             <h3>{e.title}</h3>
//             <div className='contImage'>
//               <img src={e.image} alt="Imagen del Producto" />
//             </div>
//             <span>Descripcion:</span>
//             <textarea defaultValue={e.description}></textarea>
//             <span>Precio U$D: {e.price}</span>
//           </div>
//         </div>)}
//     </>)
// }
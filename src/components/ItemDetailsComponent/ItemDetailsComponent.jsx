import React from 'react'
import style from "./style.css";
import { products } from '../../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailsComponent = () => {

  const {id} = useParams();
  const [items] = useState(products);

  console.log(items);

  return (
    <div>
        {items.map(e =>
        <div key={e.id}>
          <span>{e.titulo}</span>
        </div>
        )}
    </div>
  )
}
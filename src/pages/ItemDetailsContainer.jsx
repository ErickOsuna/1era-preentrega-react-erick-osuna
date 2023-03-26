import React from 'react'
import { CategoryNavBarComponent } from '../components'
import { products } from '../data/products'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetailsContainer = () => {

  const { id } = useParams();
  const [items] = useState(products);
  const resultado = items.find(e => e.id === id);

  return (
    <div>
      <CategoryNavBarComponent />
      <div className='itemListContainer'>
        <span>{resultado.titulo}</span>
      </div>
    </div>
  )
}

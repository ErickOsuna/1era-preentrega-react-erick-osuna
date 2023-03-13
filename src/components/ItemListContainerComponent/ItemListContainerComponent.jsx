import React from 'react';
import { ProductCardComponent } from '../ProductCardComponent/ProductCardComponent';
import "./style.css";

export const ItemListContainerComponent = () => {
  return (
    <div className='itemListContainer'>
        <ProductCardComponent/>
    </div>
  )
}

import React from 'react';
import { ProductCardComponent } from '../ProductCardComponent/ProductCardComponent';
import "./style.css";

export const ItemListContainerComponent = (props) => {
  const {greeting} = props;
  
  return (
    <div className='itemListContainer'>
        <p>{props.greeting}</p>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
        <ProductCardComponent/>
    </div>
  )
}

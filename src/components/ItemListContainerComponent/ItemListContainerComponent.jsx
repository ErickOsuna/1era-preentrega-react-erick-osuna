import React from 'react';
import "./style.css";

export const ItemListContainerComponent = ({ children }) => {


  return (
        <div className='itemListContainer'>
          {children}
        </div>
  )
}


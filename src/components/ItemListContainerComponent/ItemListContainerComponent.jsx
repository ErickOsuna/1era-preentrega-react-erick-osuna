import React from 'react';
import "./style.css";

// export const ItemListContainerComponent = (props) => {
//   const {greeting} = props;
  
//   return (
//     <div className='itemListContainer'>
//         <p>{props.greeting}</p>
//         <ProductCardComponent/>
//     </div>
//   )
// }

export const ItemListContainerComponent = ({children}) => {
  
  
  return (
    <div className='itemListContainer'>
        {children}
    </div>
  )
}


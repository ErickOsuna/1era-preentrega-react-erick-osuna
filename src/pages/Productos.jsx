import React from 'react'
import { CategoryNavBarComponent, ItemListContainerComponent, ProductCardComponent } from '../components'

export const Productos = () => {
  return (
    <div>
      <CategoryNavBarComponent />
      <ItemListContainerComponent>
          <ProductCardComponent />
      </ItemListContainerComponent>
    </div>
  )
}

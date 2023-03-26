import React from 'react'
import { CategoryNavBarComponent, ItemCategoryComponent } from '../components'
import style from "../components/ItemListContainerComponent/style.css"

export const ItemCategoryContainer = () => {
  return (
    <div>
      <CategoryNavBarComponent />
      <div >
        <ItemCategoryComponent />
      </div>
    </div>
  )
}

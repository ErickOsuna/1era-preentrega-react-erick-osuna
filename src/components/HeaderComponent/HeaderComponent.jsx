import React from 'react'
import { NavBarComponent } from '../NavBarComponent/NavBarComponent'
import logo from "../../img/logo.png"
import { CartWidgetComponent } from '../CartWidgetComponent/CartWidgetComponent'

export const HeaderComponent = () => {
  return (
    <header>
        <a href='#'><img src={logo} alt="Logo" /></a>
        <h2>Tienda de Computadora</h2>
        <NavBarComponent />
        <CartWidgetComponent/>
    </header>
  )
}

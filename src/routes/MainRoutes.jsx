import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { CategoryNavBarComponent, NavBarComponent } from '../components';
import { Home, Productos, ArmaTuPc, Contacto, IniciaSesion, CartWidget, ItemDetailContainer, ItemCategoryContainer } from "../pages";

export const MainRoutes = () => {
  return (
    <Router>
      <NavBarComponent/>
      <CategoryNavBarComponent/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category" element={<Productos />} />
        <Route exact path="/category/:categoryId" element={<ItemCategoryContainer />} />
        <Route exact path="/category/:productId" element={<ItemDetailContainer />} />
        <Route exact path="/arma-tu-pc" element={<ArmaTuPc />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/inicia-sesion" element={<IniciaSesion />} />
        <Route exact path="/cart-widget" element={<CartWidget />} />
      </Routes>
    </Router>
  )
}

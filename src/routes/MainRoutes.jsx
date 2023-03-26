import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Productos, ArmaTuPc, Contacto, IniciaSesion, CartWidget, ItemDetailsContainer, ItemCategoryContainer } from "../pages";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/category" element={<Productos />}/>
        <Route exact path="/category/:id" element={<ItemCategoryContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailsContainer/>}/>
        <Route exact path="/arma-tu-pc" element={<ArmaTuPc />}/>
        <Route exact path="/contacto" element={<Contacto />}/>
        <Route exact path="/inicia-sesion" element={<IniciaSesion />}/>
        <Route exact path="/cart-widget" element={<CartWidget />}/>
      </Routes>
    </Router>
  )
}

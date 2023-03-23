import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home, Productos, ArmaTuPc, Contacto, IniciaSesion, CartWidget } from "../pages";

export const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productos" element={<Productos />} />
        <Route exact path="/productos/:categoryId" element={<Productos />} />
        <Route exact path="/arma-tu-pc" element={<ArmaTuPc />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/inicia-sesion" element={<IniciaSesion />} />
        <Route exact path="/cart-widget" element={<CartWidget />} />
      </Routes>
    </Router>
  )
}

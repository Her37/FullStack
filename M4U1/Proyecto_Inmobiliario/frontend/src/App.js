import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';

import Footer from "./componentes/layout/Footer";
import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Novedades from "./pages/Novedades";
import Galeria from "./pages/Galeria";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Novedades" element={<Novedades />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Servicios" element={<Servicios />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
};

export default App;

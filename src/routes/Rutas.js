import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importar layout
import Layout from "../layout/Layout";

//Importación de las páginas
import Restaurant from "../pages/contenido/Comida/Restaurant";
import Fondita from "../pages/contenido/Comida/Fondita";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Iphone from "../componentes/Iphone";

function Rutas() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  exact path="/restaurant" element={<Restaurant/>}/>
            <Route exact path="/fondita" element={<Fondita/>}/>
            <Route exact path="/iphone" element={<Iphone/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default Rutas;

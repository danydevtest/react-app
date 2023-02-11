import React from "react";
import Carrusel from "../componentes/Carrusel";
import Tarjetas from "../componentes/Tarjetas";

function Home() {
  return (
    <>
      <hr />
      <div className="section p-2">
        <Carrusel />
      </div>
      <hr />
      <div className="section p-2">
        <Tarjetas/>
        
      </div>
    </>
  );
}

export default Home;

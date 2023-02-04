import React from "react";
import Carrusel from "../componentes/Carrusel";
import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="section p-2">
        <Carrusel />
      </div>

      <div className="section p-2">
        <div class="row container text-center">
          <div class="col">
            <div class="card">
              <img src="https://www.altonivel.com.mx/wp-content/uploads/2018/06/mejores-celulares-2018.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Celulares Iphone</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/iphone" class="btn btn-primary">
                  Seguir leyendo...
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
          <div class="card">
              <img src="https://http2.mlstatic.com/D_NQ_NP844100-MLA51125429097_082022-F00.jpg-B.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Seguir leyendo...
                </a>
              </div>
            </div>
          </div>
          <div class="col">
          <div class="card">
              <img src="https://i.linio.com/p/076f526abcbf96b3b5d6bf713065d1fa.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                 Seguir leyendo....
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

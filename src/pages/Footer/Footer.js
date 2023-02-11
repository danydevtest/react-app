import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="pie-pagina">
      <div className="row">
        <div className="col">
          <ul class="list-group">
            <li>
              <button type="button" class="btn btn-link">
                Nuevos modelos
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-link">
                Tarjetas
              </button>
            </li>
            <li>
              <button type="button" class="btn btn-link">
               Discos Duros
              </button>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li><i class="bi bi-whatsapp"></i>934111111</li>
            <li><i class="bi bi-facebook"></i>dany@facebook.com</li>
            <li><i class="bi-envelope-at"></i>dany@gmail.com</li>
          </ul>
        </div>
        <div className="col">Comentarios
        </div>
      </div>
    </div>
  );
}

export default Footer;

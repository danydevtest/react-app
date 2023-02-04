import React from 'react'

function Carrusel() {
  return (
    <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src="/images/imac.jpg" class="d-block" width="400px"  alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Procesadores Ryzen</h5>
          <p>Lo mejor en computadoras de Escritorio con procesadores Ryzen.</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src="/images/ima3.jpg" class="d-block" width="400px" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Procesadores intel</h5>
          <p>Descubre lo mejor en procesadores Intel PC de Escritorio.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="/images/ima2.jpeg" class="d-block" width="400px"  alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Computadoras nuevas</h5>
          <p>Nuevos equipos de cómputo</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
      </div>
  )
}

export default Carrusel
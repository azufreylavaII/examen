import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  // Array para las imagenes con sus respectivas rutas public/images
  const images = [
    './images/forniture1.png',
    './images/forniture2.png',
    './images/forniture3.png'
  ];
// Esto es para inicializar el estado a  currentIndex=0
//y setCurrentIndex es para setear el valor de currentIndex
  const [currentIndex, setCurrentIndex] = useState(0);
//este efecto es una funcion que se ejecuta cada vez que se renderiza
//el componente.
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); 
    //al crear este array permite que solo se ejcute una sola vez la funcion
    //cuando se renderiza el componente.
    // ademas se ejecuta tambien cuando el valor cambia.
  }, [currentIndex, images.length]);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Forniture" className="banner-image" />
    </div>
  );
}

export default Banner;

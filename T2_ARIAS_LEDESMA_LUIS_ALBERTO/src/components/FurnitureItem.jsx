import React, { useState } from 'react';
import './FurnitureItem.css';

//Esta funcion  contiene parametros que viene
// desde otro elemnto que lo contiene.
function FurnitureItem({ image, hoverImage, title, description }) {
 // Esto es para inicializar el estado de   currentImage 
 //con la ruta de una imagen.
  // y setCurrentImage es para setear el valor con otra ruta.
  const [currentImage, setCurrentImage] = useState(image);
//si el puntero de mouse se encuentra frente a la imagen
// setea con la ruta que se encuentra en 
//hoverImage, esto viene en el parametro.
  const handleMouseEnter = () => {
    setCurrentImage(hoverImage);
  };
//Si el mouse sale del frente de la imagen se carga 
//otra ruta que tambien viene en el parametro.
  const handleMouseLeave = () => {
    setCurrentImage(image);
  };
// retorna etiquetas con src,alt,clasName
//y sus eventos onMouseEnter y onMouseLeave, con sus 
//respectivas funciones handleMouseEnter yhandleMouseLeave
  return (
    <div className="furniture-item">
      <img 
        src={currentImage} 
        alt={title} 
        className="furniture-image" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FurnitureItem;

import React, { useState } from 'react';
import './FurnitureItem.css';

//esta funcion  contiene parametros que viene
// desde otro elemnto que lo contiene.
function FurnitureItem({ image, hoverImage, title, description }) {
  
  const [currentImage, setCurrentImage] = useState(image);

  const handleMouseEnter = () => {
    setCurrentImage(hoverImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(image);
  };

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

import React, { useState, useEffect } from 'react';
import './Banner.css';

function Banner() {
  // Array of image URLs
  const images = [
    '/images/furniture1.jpg',
    '/images/furniture2.jpg',
    '/images/furniture3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); 
  }, [currentIndex, images.length]);

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="Furniture" className="banner-image" />
    </div>
  );
}

export default Banner;

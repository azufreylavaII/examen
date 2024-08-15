import React from 'react';
import './Testimonial.css';

function Testimonial({ image, text, author }) {
  return (
    <div className="testimonial">
      <img src={image} alt={author} className="testimonial-image" />
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-author">- {author}</p>
    </div>
  );
}

export default Testimonial;

import React, { useState } from 'react';
import Testimonial from './Testimonial';
import './TestimonialsContainer.css';

function TestimonialsContainer() {
  const testimonials = [
    {
      image: '/images/customer1.jpg',
      text: 'Los muebles de MueblesFAST son de una calidad excepcional. Estoy muy contento con mi compra.',
      author: 'Juan Pérez',
    },
    {
      image: '/images/customer2.jpg',
      text: 'La atención al cliente fue increíble, y los muebles llegaron justo a tiempo.',
      author: 'María García',
    },
    {
      image: '/images/customer3.jpg',
      text: 'Recomiendo totalmente MueblesFAST, tienen los mejores diseños y calidad.',
      author: 'Carlos López',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonials-container">
      <button onClick={prevTestimonial} className="arrow left-arrow">&lt;</button>
      <Testimonial 
        image={testimonials[currentIndex].image} 
        text={testimonials[currentIndex].text} 
        author={testimonials[currentIndex].author} 
      />
      <button onClick={nextTestimonial} className="arrow right-arrow">&gt;</button>
    </div>
  );
}

export default TestimonialsContainer;

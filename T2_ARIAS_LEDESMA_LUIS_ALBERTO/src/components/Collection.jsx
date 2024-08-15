import React from 'react';
import CollectionDescription from './CollectionDescription';
import FurnitureItem from './FurnitureItem';
import './Collection.css';

function Collection() {
  return (
    <section className="collection">
      <CollectionDescription />
      <div className="items">
        <FurnitureItem 
          image="/images/furniture1.jpg" 
          hoverImage="/images/furniture1-hover.jpg" 
          title="Chello" 
          description="El Chello es un mueble elegante y funcional, perfecto para espacios modernos." 
        />
        <FurnitureItem 
          image="/images/furniture2.jpg" 
          hoverImage="/images/furniture2-hover.jpg" 
          title="Magnus" 
          description="Un moderno sofá tapizado en terciopelo color marfil, con líneas limpias y estructura robusta." 
        />
        <FurnitureItem 
          image="/images/furniture3.jpg" 
          hoverImage="/images/furniture3-hover.jpg" 
          title="Tuti" 
          description="El Tuti es un mueble versátil y encantador, ideal para añadir un toque de alegría a cualquier espacio." 
        />
      </div>
    </section>
  );
}

export default Collection;

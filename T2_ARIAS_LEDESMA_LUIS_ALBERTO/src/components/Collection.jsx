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
          title="Mueble 1" 
          description="Hecho de madera" 
        />
        <FurnitureItem 
          image="/images/furniture2.jpg" 
          hoverImage="/images/furniture2-hover.jpg" 
          title="Mueble 2" 
          description="Hecho de madera" 
        />
        <FurnitureItem 
          image="/images/furniture3.jpg" 
          hoverImage="/images/furniture3-hover.jpg" 
          title="Mueble 3" 
          description="Hecho de madera" 
        />
      </div>
    </section>
  );
}

export default Collection;

import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MueblesFAST</div>
      <nav className="nav">
        <a href="#">Quiénes somos</a>
        <a href="#">Tienda</a>
        <a href="#">Servicios</a>
        <a href="#">Ofertas</a>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="imgBanner">
      <h1>Motorepuesto</h1>
      <nav>
        <ul>
          <li>Cachas</li>
          <li>Guardabarros</li>
          <li>Rueda</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
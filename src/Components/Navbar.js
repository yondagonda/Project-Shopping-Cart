import React from 'react';
import { Link } from 'react-router-dom';
import NavCSS from './Navbar.module.css';

const Navbar = () => {
  const displayCart = () => {
    console.log('g');
  };

  return (
    <>
      <footer>
        <div className={NavCSS.title}>FakeStore</div>
        <nav>
          <ul>
            <li>
              <Link to="/Project-Shopping-Cart">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
            <li onClick={displayCart}>Cart</li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;

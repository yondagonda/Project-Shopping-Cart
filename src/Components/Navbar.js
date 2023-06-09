import React from 'react';
import { Link } from 'react-router-dom';
import NavCSS from './Navbar.module.css';

const Navbar = ({ totalQuantity }) => {
  const displayCart = () => {
    document.querySelector('.Cart_sidebar__yBOE6').style.display = 'block';
  };

  return (
    <>
      <footer>
        <Link to="/Project-Shopping-Cart" className={NavCSS.title}>
          FakeStore
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/Project-Shopping-Cart">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
            <li onClick={displayCart} className={NavCSS.cart}>
              Cart
              <div className={NavCSS.totalQuantity}>
                {totalQuantity !== 0 ? totalQuantity : ''}
              </div>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;

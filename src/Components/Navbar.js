import React from 'react';
import { Link } from 'react-router-dom';
import NavCSS from './Navbar.module.css';

const Navbar = ({ totalQuantity }) => {
  const displayCart = () => {
    document.querySelector('.sidebar').style.display = 'block';
  };

  return (
    <>
      <footer className="bg-black text-white flex items-center sm:justify-around justify-normal gap-2">
        <Link
          to="/Project-Shopping-Cart"
          className="sm:text-4xl text-2xl p-3 hover:text-green-300 font-kablammo"
        >
          FakeStore
        </Link>

        <nav>
          <ul className="flex sm:gap-8 gap-4 items-center">
            <li className="sm:text-base text-xs">
              <Link
                to="/Project-Shopping-Cart"
                className="hover:text-green-300"
              >
                Home
              </Link>
            </li>
            <li className="sm:text-base text-xs">
              <Link to="/Store" className="hover:text-green-300">
                Store
              </Link>
            </li>
            <li
              onClick={displayCart}
              className="flex gap-2 cursor-pointer items-start hover:text-green-300 sm:text-base text-xs"
            >
              Cart
              <div>
                {totalQuantity === 0 ? (
                  ''
                ) : (
                  <div className="bg-red-500 rounded-2xl px-1.5 md:bg-green-500 sm:text-base text-xs">
                    {totalQuantity}
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;

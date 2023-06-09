import React from 'react';
import CartCSS from './Cart.module.css';
import backpack from '../img/backpack.jpg';
import whitet from '../img/whitetshirt.jpg';
import navysweat from '../img/bbluesweater.webp';
import jacket from '../img/jacket.jpeg';

const Cart = ({
  itemDetails,
  allItems,
  grandTotal,
  incrementQuantity,
  decrementQuantity,
}) => {
  console.log(allItems);

  const renderPreview = (id) => {
    if (id === 'item1') {
      return <img className="sm:h-24 h-14" alt="backpack" src={backpack} />;
    }
    if (id === 'item2') {
      return <img className="sm:h-24 h-14" alt="white t shirt" src={whitet} />;
    }
    if (id === 'item3') {
      return (
        <img className="sm:h-24 h-14" alt="navy sweather" src={navysweat} />
      );
    }
    if (id === 'item4') {
      return <img className="sm:h-24 h-14" alt="rain jacket" src={jacket} />;
    }
  };

  return (
    <div className="sidebar fixed right-0 h-screen z-10 bg-black/80 text-white hidden">
      <div className="text-center sm:text-2xl font-bold p-4 mt-2">
        Your Shopping Cart
      </div>
      <ul className="flex flex-col items-center gap-5 mt-3">
        {allItems.map((item) => {
          return (
            <li className="gap-7 flex items-center" key={item.id}>
              {renderPreview(item.id)}
              <div className="items-center flex flex-col">
                <div>{item.name}</div>
                <div>${item.total}</div>
                <div className="flex gap-3">
                  <button
                    className="w-5"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    className="w-5"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          );
        })}
        <div className="font-bold sm:text-xl">Total: ${grandTotal}</div>

        <div className="flex flex-col gap-5">
          <button className="border border-solid rounded px-5 py-1 hover:text-orange-300 text-xs sm:text-base">
            Checkout
          </button>
          <button
            className="border border-solid rounded px-5 py-1 hover:text-orange-300 text-xs sm:text-base"
            onClick={() =>
              (document.querySelector('.sidebar').style.display = 'none')
            }
          >
            Close
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Cart;

import React from 'react';
import CartCSS from './Cart.module.css';

const Cart = ({
  itemDetails,
  allItems,
  grandTotal,
  incrementQuantity,
  decrementQuantity,
}) => {
  console.log(allItems);
  return (
    <div className={CartCSS.sidebar}>
      <div className={CartCSS.title}>Your Shopping Cart</div>
      <ul className={CartCSS.cartInfo}>
        {allItems.map((item) => {
          return (
            <li className={CartCSS.cartItem} key={item.id}>
              <div>{item.id}</div>
              <div>${item.total}</div>
              <div className={CartCSS.quantityContainer}>
                <button
                  className={CartCSS.quantityButton}
                  onClick={() => decrementQuantity(item.id)}
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  className={CartCSS.quantityButton}
                  onClick={() => incrementQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
        <div className={CartCSS.total}>Total: ${grandTotal}</div>
      </ul>
      {/* <button>Close</button> */}
    </div>
  );
};

export default Cart;

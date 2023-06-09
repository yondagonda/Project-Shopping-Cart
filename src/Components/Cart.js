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
      return <img className={CartCSS.preview} alt="backpack" src={backpack} />;
    }
    if (id === 'item2') {
      return (
        <img className={CartCSS.preview} alt="white t shirt" src={whitet} />
      );
    }
    if (id === 'item3') {
      return (
        <img className={CartCSS.preview} alt="navy sweather" src={navysweat} />
      );
    }
    if (id === 'item4') {
      return <img className={CartCSS.preview} alt="rain jacket" src={jacket} />;
    }
  };

  return (
    <div className={CartCSS.sidebar}>
      <div className={CartCSS.title}>Your Shopping Cart</div>
      <ul className={CartCSS.cartInfo}>
        {allItems.map((item) => {
          return (
            <li className={CartCSS.cartItem} key={item.id}>
              {renderPreview(item.id)}
              <div className={CartCSS.itemDetails}>
                <div>{item.name}</div>
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
              </div>
            </li>
          );
        })}
        <div className={CartCSS.total}>Total: ${grandTotal}</div>

        <div className={CartCSS.buttons}>
          <button className={CartCSS.checkout}>Checkout</button>
          <button
            className={CartCSS.closebtn}
            onClick={() =>
              (document.querySelector('.Cart_sidebar__yBOE6').style.display =
                'none')
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

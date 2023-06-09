import React from 'react';
import './Store.css';
import backpack from '../img/backpack.jpg';
import whitet from '../img/whitetshirt.jpg';
import navysweat from '../img/bbluesweater.webp';
import jacket from '../img/jacket.jpeg';

const Store = ({ logItem }) => {
  return (
    <div className="products-container mt-8 grid gap-8 container ms-auto me-auto">
      <div className="cards">
        <img className="h-40" src={backpack} alt="a backpack" />
        <div>
          <div>Backpack</div>
          <div>$49.99</div>
          <button
            className="add-cart"
            data-id="item1"
            data-name="Backpack"
            onClick={logItem}
            data-price="49.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="cards">
        <img className="h-40" src={whitet} alt="a white t shirt" />
        <div>
          <div>White T-shirt</div>
          <div>$29.99</div>
          <button
            className="add-cart"
            data-id="item2"
            data-name="White T-shirt"
            onClick={logItem}
            data-price="29.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="cards">
        <img className="h-40" src={navysweat} alt="a navy sweater" />
        <div>
          <div>Navy Sweater</div>
          <div>$629.99</div>
          <button
            className="add-cart"
            data-id="item3"
            data-name="Navy Sweater"
            onClick={logItem}
            data-price="629.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="cards">
        <img className="h-40" src={jacket} alt="a Jacket" />
        <div>
          <div>Rain Jacket</div>
          <div>$109.99</div>
          <button
            className="add-cart"
            data-id="item4"
            data-name="Rain Jacket"
            onClick={logItem}
            data-price="109.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="cards">Item 5</div>
      <div className="cards">Item 6</div>
      <div className="cards">Item 7</div>
      <div className="cards">Item 8</div>
      <div className="cards">Item 9</div>
      <div className="cards">Item 10</div>
    </div>
  );
};

export default Store;

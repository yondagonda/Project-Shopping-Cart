import React from 'react';
import StoreCSS from './Store.module.css';
import backpack from '../img/backpack.jpg';
import whitet from '../img/whitetshirt.jpg';
import navysweat from '../img/bbluesweater.webp';
import jacket from '../img/jacket.jpeg';

const Store = ({ logItem }) => {
  return (
    <div className={StoreCSS.container}>
      <div className={StoreCSS.card}>
        <img src={backpack} alt="a backpack" />
        <div className={StoreCSS.productInfo}>
          <div>Backpack</div>
          <div>$49.99</div>
          <button
            className={StoreCSS.Add}
            data-id="item1"
            data-name="Backpack"
            onClick={logItem}
            data-price="49.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={StoreCSS.card}>
        <img src={whitet} alt="a white t shirt" />
        <div className={StoreCSS.productInfo}>
          <div>White T-shirt</div>
          <div>$29.99</div>
          <button
            className={StoreCSS.Add}
            data-id="item2"
            data-name="White T-shirt"
            onClick={logItem}
            data-price="29.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={StoreCSS.card}>
        <img src={navysweat} alt="a navy sweater" />
        <div className={StoreCSS.productInfo}>
          <div>Navy Sweater</div>
          <div>$629.99</div>
          <button
            className={StoreCSS.Add}
            data-id="item3"
            data-name="Navy Sweater"
            onClick={logItem}
            data-price="629.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={StoreCSS.card}>
        <img src={jacket} alt="a Jacket" />
        <div className={StoreCSS.productInfo}>
          <div>Rain Jacket</div>
          <div>$109.99</div>
          <button
            className={StoreCSS.Add}
            data-id="item4"
            data-name="Rain Jacket"
            onClick={logItem}
            data-price="109.99"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className={StoreCSS.card}>Item 5</div>
      <div className={StoreCSS.card}>Item 6</div>
      <div className={StoreCSS.card}>Item 7</div>
      <div className={StoreCSS.card}>Item 8</div>
      <div className={StoreCSS.card}>Item 9</div>
      <div className={StoreCSS.card}>Item 10</div>
    </div>
  );
};

export default Store;

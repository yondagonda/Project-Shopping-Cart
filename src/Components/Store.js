import React from 'react';
import StoreCSS from './Store.module.css';
import backpack from '../img/backpack.jpg';
import whitet from '../img/whitetshirt.jpg';
import navysweat from '../img/bbluesweater.webp';

const Store = ({ logItem }) => {
  return (
    <div className={StoreCSS.container}>
      <div className={StoreCSS.card}>
        <img src={backpack} alt="a backpack" />
        <div>
          <button
            className={StoreCSS.Add}
            data-id="item1"
            onClick={logItem}
            data-price="49.99"
          >
            Add to Cart
          </button>
          1. $49.99
        </div>
      </div>
      <div className={StoreCSS.card}>
        <img src={whitet} alt="a white t shirt" />
        <div>
          <button
            className={StoreCSS.Add}
            data-id="item2"
            onClick={logItem}
            data-price="29.99"
          >
            Add to Cart
          </button>
          2. $29.99
        </div>
      </div>
      <div className={StoreCSS.card}>
        <img src={navysweat} alt="navy sweater" />
        <div>
          <button
            className={StoreCSS.Add}
            data-id="item3"
            onClick={logItem}
            data-price="629.99"
          >
            Add to Cart
          </button>
          3. $629.99
        </div>
      </div>
      <div className={StoreCSS.card}>Item 4</div>
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

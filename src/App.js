import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Store from './Components/Store';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  const [itemDetails, setItemDetails] = useState({
    id: '',
    name: '',
    quantity: 0,
    price: 0,
    total: 0,
  });
  const [allItems, setAllItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const logItem = (e) => {
    setItemDetails({
      id: e.target.dataset.id,
      quantity: 1,
      name: e.target.dataset.name,
      price: +e.target.dataset.price,
      total: +e.target.dataset.price,
    });
  };

  const incrementQuantity = (id) => {
    setAllItems(
      allItems.map((item) => {
        if (item.id === id) {
          item.quantity++;
          item.total = Math.round(item.quantity * item.price * 100) / 100;
          return item;
        } else {
          return item;
        }
      })
    );
  };

  const decrementQuantity = (id) => {
    setAllItems(
      allItems.map((item) => {
        if (item.id === id) {
          item.quantity--;
          item.total = Math.round(item.quantity * item.price * 100) / 100;
          return item;
        } else {
          return item;
        }
      })
    );
    setAllItems(allItems.filter((item) => item.quantity !== 0)); // ensures items with quantity:0 are removed
  };

  useEffect(() => {
    if (itemDetails.quantity > 0) {
      if (allItems.length === 0) {
        setAllItems(allItems.concat(itemDetails));
      }

      for (let i = 0; i < allItems.length; i++) {
        if (itemDetails.id === allItems[i].id) {
          setAllItems(
            allItems.map((item, index) => {
              if (index === i) {
                item.quantity++; // increments quantity
                item.total = Math.round(item.quantity * item.price * 100) / 100; // updates total
                return item;
              } else {
                return item;
              }
            })
          );
          return;
        }
      }
      setAllItems(allItems.concat(itemDetails));
    }
  }, [itemDetails]);

  const calcGrandTotal = () => {
    let sum = 0;
    allItems.map((item) => {
      sum += item.total;
    });
    sum = Math.round(sum * 100) / 100;
    setGrandTotal(sum);
  };

  useEffect(() => {
    calcGrandTotal();
    calcTotalQuantity();
  }, [allItems]);

  const calcTotalQuantity = () => {
    let total = 0;
    allItems.map((item) => {
      total += item.quantity;
    });
    setTotalQuantity(total);
  };

  return (
    <>
      <Cart
        itemDetails={itemDetails}
        allItems={allItems}
        grandTotal={grandTotal}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <Navbar totalQuantity={totalQuantity} />

      <div className="h-screen">
        <Routes>
          <Route path="/Project-Shopping-Cart" element={<Home />} />
          <Route path="/Store" element={<Store logItem={logItem} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

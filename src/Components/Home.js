import React from 'react';
import HomeCSS from './Home.module.css';

const Home = () => {
  return (
    <div className={HomeCSS.container}>
      <div>An online store that sells something</div>
      <button>Shop Now</button>
    </div>
  );
};

export default Home;

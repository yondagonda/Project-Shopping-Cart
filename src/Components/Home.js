import React from 'react';
import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={HomeCSS.container}>
      <div>An online store that sells something</div>
      <Link to="/Store" className={HomeCSS.shopBtn}>
        Shop Now
      </Link>
    </div>
  );
};

export default Home;

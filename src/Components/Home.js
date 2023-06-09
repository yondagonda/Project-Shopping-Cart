import React from 'react';
import HomeCSS from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-300 flex flex-col p-12 mt-14 h-60 shadow-md">
      <div>An online clothing store</div>
      <Link
        to="/Store"
        className="text-black border border-solid border-black py-4 
        px-8 w-1/6 sm:min-w-[190px] min-w-[140px] sm:text-xl text-sm mt-8 
        rounded-full text-center hover:bg-gray-400 hover:text-green-300"
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;

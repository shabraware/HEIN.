import React from 'react';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
    </>
  );
};

export default Home;

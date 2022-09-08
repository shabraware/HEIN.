import React from 'react';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

import React from 'react';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;

import React from 'react';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Filter from '../components/Filter';
import Products from '../components/Products';
import Footer from '../layout/Footer';
import Newsletter from '../components/Newsletter';
import Title from '../components/Title';

const ProductsList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <Filter />
      <Products /> {/* Pass the products i want to show to this component */}
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsList;

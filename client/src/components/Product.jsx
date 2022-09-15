import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { AddShoppingCart, Search, FavoriteBorder } from '@mui/icons-material';

const Product = ({ image, id }) => {
  const [overlayIsShown, setOverlayIsShown] = useState(false);
  return (
    <figure
      className='relative'
      onMouseEnter={() => {
        setOverlayIsShown(true);
      }}
      onMouseLeave={() => {
        setOverlayIsShown(false);
      }}
    >
      <img src={image} alt='' className='w-full h-full object-cover' />
      {overlayIsShown && (
        <figcaption className='absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
          <div className='hover:scale-125 transition ease-out duration-300 cursor-pointer w-10 h-10 m-2 bg-white/90 rounded-full flex items-center justify-center'>
            <AddShoppingCart />
          </div>
          <Link to={`/products/${id}`}>
            <div className='hover:scale-125 transition ease-out duration-300 cursor-pointer w-10 h-10 m-2 bg-white/90 rounded-full flex items-center justify-center'>
              <Search />
            </div>
          </Link>
          <div className='hover:scale-125 transition ease-out duration-300 cursor-pointer w-10 h-10 m-2 bg-white/90 rounded-full flex items-center justify-center'>
            <FavoriteBorder />
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default Product;

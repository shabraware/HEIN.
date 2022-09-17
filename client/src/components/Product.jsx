import React, { useState } from 'react';

import { Link } from 'react-router-dom';

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
        <Link
          to={`/products/${id}`}
          className='cursor-pointer absolute top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'
        ></Link>
      )}
    </figure>
  );
};

export default Product;

import React from 'react';

const CartProduct = ({ product }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between mb-4'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:mr-8 mb-8 md:mb-0'>
          <img className='w-full h-full md:w-64 md:h-64' src={product.image} />
        </div>
        <div>
          <div className='mb-6'>
            <span className='font-bold'>Product:</span> {product.title}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>ID:</span> {product._id}
          </div>
          <div className='mb-6'>
            <span className='font-bold'>Size:</span> {product.size}
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center justify-start mb-8'>
          <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
            {product.quantity}
          </span>
        </div>
        <span className='block mb-6 text-4xl'>
          $ {product.quantity * product.price}
        </span>
      </div>
    </div>
  );
};

export default CartProduct;

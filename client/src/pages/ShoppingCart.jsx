import React from 'react';

import { Add, Remove } from '@mui/icons-material';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Footer from '../layout/Footer';

const ShoppingCart = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <section className='px-8 py-4'>
        <h1 className='uppercase mt-4 mb-8 text-4xl text-center'>your bag</h1>
        <div className='grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          <div>
            <a className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500'>
              continue shopping
            </a>
          </div>
          <div className='flex'>
            <a className='mr-4 underline cursor-pointer'>Shopping Bag (2)</a>
            <a className='underline cursor-pointer'>Your Wishlist (0)</a>
          </div>
          <div>
            <a className='text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 hover:text-black hover:border-black hover:bg-white bg-black text-white transition ease-out duration-500'>
              checkout now
            </a>
          </div>
        </div>
        <div className='my-12 grid gap-8 lg:grid-cols-[2fr_1fr]'>
          <div>
            <div className='flex flex-col md:flex-row justify-between mb-4'>
              {/* Make this a separate component */}
              <div className='flex flex-col md:flex-row'>
                <div className='md:mr-8 mb-8 md:mb-0'>
                  <img
                    className='w-full h-full md:w-64 md:h-64'
                    src='https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwY2xvdGhpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  />
                </div>
                <div>
                  <div className='mb-6'>
                    <span className='font-bold'>Product:</span> Product Name
                  </div>
                  <div className='mb-6'>
                    <span className='font-bold'>ID:</span> 12345678910
                  </div>
                  <div className='mb-6'>
                    <span className='block mr-4 h-6 w-6 bg-red-900 rounded-full' />
                  </div>
                  <div className='mb-6'>
                    <span className='font-bold'>Size:</span> xl
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-start mb-8'>
                  <Remove className='cursor-pointer' />
                  <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
                    1
                  </span>
                  <Add className='cursor-pointer' />
                </div>
                <span className='block mb-6 text-4xl'>$ 20.00</span>
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between mb-4'>
              <div className='flex flex-col md:flex-row'>
                <div className='md:mr-8 mb-8 md:mb-0'>
                  <img
                    className='w-full h-full md:w-64 md:h-64'
                    src='https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwY2xvdGhpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                  />
                </div>
                <div>
                  <div className='mb-6'>
                    <span className='font-bold'>Product:</span> Product Name
                  </div>
                  <div className='mb-6'>
                    <span className='font-bold'>ID:</span> 12345678910
                  </div>
                  <div className='mb-6'>
                    <span className='block mr-4 h-6 w-6 bg-red-900 rounded-full' />
                  </div>
                  <div className='mb-6'>
                    <span className='font-bold'>Size:</span> xl
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='flex items-center justify-start mb-8'>
                  <Remove className='cursor-pointer' />
                  <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
                    1
                  </span>
                  <Add className='cursor-pointer' />
                </div>
                <span className='block mb-6 text-4xl'>$ 20.00</span>
              </div>
            </div>
          </div>
          <div>
            <div className='border rounded-xl p-4'>
              <h1 className='uppercase text-4xl mb-8'>order summary</h1>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>subtotal</span>
                <span>$ 80.00</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>estimated shipping</span>
                <span>$ 8.00</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize'>shipping discount</span>
                <span>-$ 2.00</span>
              </div>
              <div className='flex justify-between mb-8'>
                <span className='capitalize font-bold text-2xl'>Total</span>
                <span className='font-bold text-2xl'>$ 86.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;

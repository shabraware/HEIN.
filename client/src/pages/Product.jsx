import React from 'react';

import { Add, Remove } from '@mui/icons-material';

import Navbar from '../layout/Navbar';
import Announcement from '../layout/Announcement';
import Footer from '../layout/Footer';
import Newsletter from '../components/Newsletter';

const ProductsList = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <section className='p-8 grid md:grid-cols-2 gap-8'>
        <div className='grow'>
          <img
            src='https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVuJTIwY2xvdGhpbmd8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='w-full h-full object-cover'
          />
        </div>
        <div className='grow'>
          <h2 className='text-5xl mb-6'>Lorem, ipsum.</h2>
          <p className='mb-6 text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
            beatae harum nihil consequuntur corporis quaerat quam omnis labore
            exercitationem, tempora repellendus autem at odio. Accusamus placeat
            debitis fugit qui veritatis?
          </p>
          <span className='block mb-6 text-4xl'>$ 20.00</span>
          <div className='grid sm:grid-cols-2 gap-4 mb-6'>
            <div className='flex items-center justify-start'>
              <span className='block mr-4 text-2xl'>Color</span>
              <span className='block mr-4 h-6 w-6 bg-red-900 rounded-full'></span>
              <span className='block mr-4 h-6 w-6 bg-green-900 rounded-full'></span>
              <span className='block mr-4 h-6 w-6 bg-blue-900 rounded-full'></span>
            </div>
            <div>
              <label htmlFor='' className='text-xl'>
                Size
              </label>
              <select>
                <option value=''>Size</option>
                <option value='dog'>XS</option>
                <option value='cat'>S</option>
                <option value='hamster'>M</option>
                <option value='parrot'>L</option>
                <option value='spider'>XL</option>
                <option value='goldfish'>2X</option>
                <option value='goldfish'>3X</option>
              </select>
            </div>
          </div>
          <div className='grid sm:grid-cols-2 gap-4 mb-6'>
            <div className='flex items-center justify-start'>
              <Remove className='cursor-pointer' />
              <span className='mx-2 text-xl h-10 w-10 rounded-2xl border flex justify-center items-center'>
                1
              </span>
              <Add className='cursor-pointer' />
            </div>
            <div>
              <button className='uppercase hover:bg-teal-700 hover:text-white transition ease-out duration-500 border-teal-700 border rounded p-4'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductsList;

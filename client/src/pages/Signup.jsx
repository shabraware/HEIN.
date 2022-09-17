import React from 'react';

import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <form
        action=''
        className='border bg-white p-6 flex flex-col items-center min-w-[17rem] sm:min-w-[22rem] md:min-w-[35rem] max-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Sign up</h1>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='First Name'
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Last Name'
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Username'
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='text'
            placeholder='Email'
          />
        </div>
        <div className='grid gap-4 md:grid-cols-2 mb-4'>
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Password'
          />
          <input
            className='block p-2 border-2 rounded focus:outline-none'
            type='password'
            placeholder='Confirm Password'
          />
        </div>

        <p className='mb-4 '>
          By Creating an accounct I consent to the processing of my personal
          data in accordance with the &nbsp;
          <a href='' className='uppercase font-bold'>
            Privacy policy
          </a>
        </p>
        <button className='mb-4 bg-teal-700 text-white p-2'>Create</button>
        <Link to='/login' className='capitalize underline mb-4'>
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;

import React from 'react';

const Login = () => {
  return (
    <div className='px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover'>
      <form
        action=''
        className='border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem]'
      >
        <h1 className='uppercase text-xl mb-4 font-bold'>Log in</h1>
        <input
          className='p-2 mb-4 border-2 rounded focus:outline-none'
          type='text'
          placeholder='Username'
        />
        <input
          className='p-2 mb-4 border-2 rounded focus:outline-none'
          type='password'
          placeholder='Password'
        />
        <button className='mb-4 bg-teal-700 text-white p-2'>Login</button>
        <a href='' className='capitalize underline mb-4'>
          Forget the password ?
        </a>
        <a href='' className='capitalize underline mb-4'>
          create a new account
        </a>
      </form>
    </div>
  );
};

export default Login;

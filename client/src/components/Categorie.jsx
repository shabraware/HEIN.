import React from 'react';

const Categorie = ({ image, title, text }) => {
  return (
    <figure className='relative'>
      <img
        src={image}
        alt={title}
        className='w-full h-full object-cover max-h-[38rem]'
      />
      <figcaption className=' bg-gray-300/30 absolute z-100 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col p-4'>
        <h2 className='mb-4 p-3 uppercase text-2xl md:text-4xl text-white font-bold text-center'>
          {title}
        </h2>
        <p className='text-white text-center mb-4'>{text}</p>
        <button className='border p-3 bg-white text-black text-lg hover:bg-black/30 hover:border-none hover:text-white transition ease-out	duration-500'>
          Shop Now
        </button>
      </figcaption>
    </figure>
  );
};

export default Categorie;

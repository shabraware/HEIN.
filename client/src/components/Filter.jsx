import React from 'react';

const Filter = () => {
  return (
    <section className='px-8 pb-8 md:flex justify-between items-center'>
      <div>
        <label className='text-xl font-bold'>Filter products:</label>
        <select>
          <option value=''>Color</option>
          <option value='dog'>White</option>
          <option value='cat'>Black</option>
          <option value='hamster'>Red</option>
          <option value='parrot'>Blue</option>
          <option value='spider'>Yellow</option>
          <option value='goldfish'>Green</option>
        </select>
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
      <div>
        <label className='text-xl font-bold'>Sort products:</label>
        <select>
          <option value=''>Newest</option>
          <option value='cat'>Price (asc)</option>
          <option value='dog'>Price (desc)</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;

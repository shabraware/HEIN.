import React from 'react';

const Filter = ({ filterChangeHandler }) => {
  return (
    <section className='px-8 pb-8 md:flex justify-between items-center'>
      <div>
        <label className='text-xl font-bold'>Filter products:</label>
        <select name='color' onChange={filterChangeHandler}>
          <option value=''>Color</option>
          <option value='white'>White</option>
          <option value='black'>Black</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='yellow'>Yellow</option>
          <option value='green'>Green</option>
        </select>
        <select name='size' onChange={filterChangeHandler}>
          <option value=''>Size</option>
          <option value='XS'>XS</option>
          <option value='S'>S</option>
          <option value='M'>M</option>
          <option value='L'>L</option>
        </select>
      </div>
      <div>
        <label className='text-xl font-bold'>Sort products:</label>
        <select name='sort' onChange={filterChangeHandler}>
          <option value='newest'>Newest</option>
          <option value='asc'>Price (asc)</option>
          <option value='desc'>Price (desc)</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;

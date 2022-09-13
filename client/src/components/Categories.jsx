import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8' id='categories'>
      <div className='grid gap-2 md:grid-cols-3 mb-2'>
        <Categorie
          name='Clothes'
          image='https://api.lorem.space/image/fashion?w=640&h=480&r=3529'
        />
        <Categorie
          name='Shoes'
          image='https://api.lorem.space/image/shoes?w=640&h=480&r=3452'
        />
        <Categorie
          name='Electronics'
          image='https://api.lorem.space/image/watch?w=640&h=480&r=6182'
        />
      </div>
      <div className='grid gap-2 md:grid-cols-2'>
        <Categorie
          name='Furniture'
          image='https://api.lorem.space/image/furniture?w=640&h=480&r=1235'
        />
        <Categorie
          name='Others'
          image='https://api.lorem.space/image?w=640&h=480&r=1848'
        />
      </div>
    </section>
  );
};

export default Categories;

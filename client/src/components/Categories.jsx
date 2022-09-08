import React from 'react';

import Categorie from './Categorie';

const Categories = () => {
  return (
    <section className='p-8'>
      <div className='grid gap-2 sm:grid-cols-3 mb-2'>
        <Categorie
          image='https://images.unsplash.com/photo-1635944201335-f9165880a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          title='shirt style'
        />
        <Categorie
          image='https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          title='jeans'
        />
        <Categorie
          image='https://images.unsplash.com/photo-1635944201335-f9165880a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          title='shirt style'
        />
      </div>
      <div className='grid gap-2 sm:grid-cols-2'>
        <Categorie
          image='https://images.unsplash.com/photo-1635944201335-f9165880a0b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbiUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          title='shirt style'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde
          enim vitae!'
        />
        <Categorie
          image='https://images.unsplash.com/photo-1610652492500-ded49ceeb378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          title='jeans'
          text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde
          enim vitae!'
        />
      </div>
    </section>
  );
};

export default Categories;

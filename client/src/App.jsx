import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './pages/Home';
import ShoppingCategorie from './pages/ShoppingCategorie';
import SingleProduct from './pages/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import Orders from './pages/Orders';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  const user = useSelector((store) => store.auth.currentUser);
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/categories/:category'>
        <ShoppingCategorie />
      </Route>
      <Route path='/products/:id'>
        <SingleProduct />
      </Route>
      <Route path='/cart'>
        <ShoppingCart />
      </Route>
      <Route path='/orders'>
        <Orders />
      </Route>
      <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
      <Route path='/signup'>
        <Signup />
      </Route>
    </Switch>
  );
};

export default App;

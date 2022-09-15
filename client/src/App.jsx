import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCategorie from './pages/ShoppingCategorie';
import SingleProduct from './pages/SingleProduct';
import ShoppingCart from './pages/ShoppingCart';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  const user = true;
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
      <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
      <Route path='/signup'>
        <Signup />
      </Route>
    </Switch>
  );
};

export default App;

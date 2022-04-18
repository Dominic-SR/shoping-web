import React from 'react'
import {Routes,Route,BrowserRouter,HashRouter, Switch} from 'react-router-dom'
import { Home } from './pages/home/home';
import { Products } from './pages/products/products'
import { auth } from './pages/auth/auth'

const Base = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home}></Route>
        <Route path ="/products" component={Products}></Route>
        <Route path="/auth" component={auth}></Route>
      </Switch>
      </BrowserRouter>
  );
}

export { Base };

import React, { Suspense } from 'react'
import { Home } from './pages/home/home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { Products } from './pages/products/products';

export const Base = () => {
  return (
    <>
    {/* <BrowserRouter>
    <Suspense fallback= {<div>Loading</div>}>
      <Routes>
        <Route exact path="/" render={props => <Home {...props}/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter> */}
    <Home/>
    <Products/>
    </>
  )
}

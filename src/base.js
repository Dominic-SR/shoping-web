import React, { Suspense } from 'react'
import { Home } from './pages/home/home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import { Products } from './pages/products/products';
import { Routes as Routes_path } from './routes';

export const Base = () => {
  return (
    <>

  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}> 
    <Routes>   
    {
      Routes_path.map((route,index)=>{
        console.log(route.component)
        console.log("<"+route.component+"/>")
        return((
          <Route
          path={route.path}
          key={index}
          component={<route.component/>}
          exact={route.exact}
          />
        ))
      })
    }
    </Routes>
    </Suspense>
    </BrowserRouter>
     </>
  )
}

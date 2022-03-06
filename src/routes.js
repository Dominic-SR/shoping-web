import React,{lazy} from 'react';
const Home = lazy(()=>import("../src/pages/home/home"));
const Products = lazy(()=>import("../src/pages/products/products"))

export const Routes = [
{
    path: "/",
    component:Home,
    exact:true
},
{
    path: "/home",
    component:Home,
    exact:true
},
{
    path: "/products",
    component:Products,
    exact:true
}
]
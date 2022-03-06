import React from 'react'
import { Brands } from '../../components/home_components/brands/brands'
import { Category } from '../../components/home_components/category/category'
import { Category_tab } from '../../components/home_components/category_tab/category_tab'
import { Feature_item } from '../../components/home_components/feature_item/feature_item'
import { Price_range } from '../../components/home_components/price_range/price_range'
import { Recommented_items } from '../../components/home_components/recommented_items/recommented_items'
import { Slider } from '../../components/home_components/slider/slider'

export const Home = () => {
  return (
    <>
    <Slider/>
    <div className="container">
		<div className="row">
            <div className="col-sm-3">
            <Category/>
            <Brands/>
            <Price_range/>
            </div>
            <div className="col-sm-9 padding-right">
            <Feature_item/>
            <Category_tab/>
            <Recommented_items/>
            </div>
        </div>
    </div>
    </>
  )
}

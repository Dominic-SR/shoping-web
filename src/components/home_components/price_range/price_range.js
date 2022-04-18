import React from 'react'

export const Price_range = () => {
  return (
    <>
    <div className="price-range">
							<h2>Price Range</h2>
							<div className="well text-center">
								 {/* <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br /> */}
								 <input type="text" className='span2' />
								 <b className="pull-left">$ 0</b> <b className="pull-right">$ 600</b>
							</div>
						</div>
						
						<div className="shipping text-center">
							<img src="images/home/shipping.jpg" alt="" />
						</div>
    </>
  )
}

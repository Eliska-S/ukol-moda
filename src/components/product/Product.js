import React from 'react'

// styles 
import './Product.css'

export default function Product({ image, name, description, price }) {
  return (
    <div class="product">
		<img class="product__image" src={`../../assets/${ image }`} alt={ name } />
		<div class="product__content">
			<h3 class="product__name">{ name }</h3>
			<p class="product__description">{ description }</p>
			<p class="product__price">{ price }</p>
		</div>
	</div>
  )
}

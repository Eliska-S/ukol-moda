import React from 'react'

// components 
import Product from '../product/Product'

// styles
import './Shoes.css'

const shoes = [
    { 
        image: 'running-shoes.jpg',
        name: 'Běhací tenisky',
        description: 'Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost.',
        price: '1790 Kč'
    },
    { 
        image: 'shiny-shoes.jpg',
        name: 'Třpytivé lodičky',
        description: 'Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět.',
        price: '2950 Kč'
    },
    { 
        image: 'red-shoes.jpg',
        name: 'Červené botičky',
        description: 'Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet.',
        price: '6200 Kč'
    }
]

export default function Shoes() {
  return (
    <section class="shoes">
	    <h2>Boty</h2>
	    <div class="products">
            { shoes.map((shoe) => (
                <Product 
                    image={ shoe.image }
                    name={ shoe.name }
                    description={ shoe.description }
                    price= {shoe.price }
                />
            ))}
	    </div>
    </section>
  )
}

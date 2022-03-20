import React from 'react'

// components
import Product from '../product/Product'

// styles
import './Accessories.css'

const accessories = [
  { 
    image: 'blue-handbag.jpg',
    name: 'Modrá kabelka',
    description: 'Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti.',
    price: '3590 Kč'
  },
  { 
    image: 'grey-scarf.jpg',
    name: 'Šedá vlněná šála',
    description: 'Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné.',
    price: '970 Kč'
  },
  { 
    image: 'glasses.jpg',
    name: 'Brýle',
    description: 'Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly.',
    price: '1620 Kč'
  }
]

export default function Accesories() {
  return (
    <section class="accessories">
	    <h2>Doplňky</h2>
	    <div class="products">
        { accessories.map((item) => (
          <Product 
            name={ item.name }
            image={ item.image }
            description={ item.description }
            price= {item.price }
          />
        ))}
	    </div>
    </section>
  )
}

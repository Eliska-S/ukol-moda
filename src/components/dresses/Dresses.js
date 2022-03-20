import React from 'react'

// components
import Product from '../product/Product'

// styles
import './Dresses.css'

const dresses = [
  { 
    image: 'red-dress.jpg',
    name: 'Červené šaty',
    description: 'V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií.',
    price: '2290 Kč'
  },
  { 
    image: 'flower-dress.jpg',
    name: 'Květované šaty',
    description: 'Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat.',
    price: '3100 Kč'
  },
  { 
    image: 'yellow-dress.jpg',
    name: 'Žluté šaty',
    description: 'Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě.',
    price: '4250 Kč'
  }
]

export default function Dresses() {
  return (
    <section class="dresses">
	    <h2>Šaty</h2>
	    <div class="products">
        { dresses.map((dress) => (
          <Product 
            name={ dress.name }
            image={ dress.image }
            description={ dress.description }
            price= {dress.price }
          />
        ))}
	    </div>
    </section>
  )
}

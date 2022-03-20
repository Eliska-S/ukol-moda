import React from 'react'

// styles 
import './Header.css'

export default function Header({ title }) {
  return (
    <header class="header">
		<h1 class="header__title">{ title }</h1>
		<p class="header__description">Stylové oblečení a doplňky pro každý den</p>
	</header>
  )
}

import React from 'react';
import { render } from 'react-dom';

// components
import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import Accesories from './components/accesories/Accessories.js';
import Dresses from './components/dresses/Dresses.js';
import Shoes from './components/shoes/Shoes.js';

// styles
import './style.css';

const webpage = {
  title: 'Móda',
  author: 'Czechitas',
  year: 2022,
}

const App = () => (
  <div class="container">
    <Header title={ webpage.title }/>
    <Dresses />
    <Shoes />
    <Accesories />
    <Footer author={ webpage.author } year={ webpage.year }/>
  </div>
);

render(<App />, document.querySelector('#app'));

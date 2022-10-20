import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import React, {useState} from 'react';
import anthurium from '../src/images/products/anthurium-img.jpg'
import pothos from '../src/images/products/pothos-img.jpg'
import uniqid from 'uniqid'

function App() {
  const [cart,setCart] = useState([{
    name: "Anthurium",
    price: "$20",
    quantity: 1,
    imgSrc: anthurium,
    id: uniqid()

  },
  // {
  //   product: "Pothos",
  //   quantity: 1,
  //   imgSrc: pothos,
  //   id: uniqid()
  // }
])
  return (
    <div>
      <Router>
        <NavBar cart={cart} setCart={setCart}/>
        <Routes>
          <Route path="/" element = {<HomePage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

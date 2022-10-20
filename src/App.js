import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import React, {useState} from 'react';
import anthurium from '../src/images/products/anthurium-img.jpg'
import pothos from '../src/images/products/pothos-img.jpg'
import dracaena from '../src/images/products/dracaena-img.jpg'
import croton from '../src/images/products/croton-img.jpg'
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';

function App() {
const [anthuriumQuantity,setAnthuriumQuantity] = useState(0);
const [crotonQuantity,setCrotonQuantity] = useState(0);
const [dracaenaQuantity,setDracaenaQuantity] = useState(0);
const [pothosQuantity,setPothosQuantity] = useState(0);

const [cart,setCart] = useState([
  { title: "Anthurium",
imgSrc: anthurium, 
price: "$20",
id: 1,
setIncrement: function(amount) {
  setAnthuriumQuantity(currentAnthuriumQuantity => {
    if(currentAnthuriumQuantity+amount <= 0) {
      return 0;
    } else
    return currentAnthuriumQuantity + amount
  })
},
setInput: function(e) {
  let target = e.target.value;
  let newQuantity = parseInt(target);
  setAnthuriumQuantity(newQuantity)
},
quantity: anthuriumQuantity
}])

const products = [
  { title: "Anthurium",
    imgSrc: anthurium, 
    price: "$20",
    id: 1,
    setIncrement: function(amount) {
      setAnthuriumQuantity(currentAnthuriumQuantity => {
        if(currentAnthuriumQuantity+amount <= 0) {
          return 0;
        } else
        return currentAnthuriumQuantity + amount
      })
    },
    setInput: function(e) {
      let target = e.target.value;
      let newQuantity = parseInt(target);
      setAnthuriumQuantity(newQuantity)
    },
    quantity: anthuriumQuantity
  },
  { title: "Croton",
    imgSrc: croton, 
    price: "$10",
    id: 2,
    setIncrement: function(amount) {
      setCrotonQuantity(currentCrotonQuantity => {
        if(currentCrotonQuantity + amount <=0) {
          return 0;
        } else
        return currentCrotonQuantity + amount
      })
    },
    setInput: function(e) {
      let target = e.target.value;
      let newQuantity = parseInt(target);
      setCrotonQuantity(newQuantity)
    },
    quantity: crotonQuantity
  },
  { title: "Dracaena",
    imgSrc: dracaena, 
    price: "$30",
    id: 3,
    setIncrement: function(amount) {
      setDracaenaQuantity(currentDracaenaQuantity => {
        if(currentDracaenaQuantity + amount <= 0) {
          return 0;
        } else
        return currentDracaenaQuantity + amount
      })
    },
    setInput: function(e) {
      let target = e.target.value;
      let newQuantity = parseInt(target);
      setDracaenaQuantity(newQuantity)
    },
    quantity: dracaenaQuantity
  },
  { title: "Pothos",
    imgSrc: pothos, 
    price: "$10",
    id: 4,
    setIncrement: function(amount) {
      setPothosQuantity(currentPothosQuantity => {
        if (currentPothosQuantity + amount <=0) {
          return 0;
        } else
        return currentPothosQuantity + amount
      })
    },
    setInput: function(e) {
      let target = e.target.value;
      let newQuantity = parseInt(target);
      setPothosQuantity(newQuantity)
    },
    quantity: pothosQuantity
  }]
  return (
    <div>
      <Router>
        <NavBar cart={cart}/>
        <Routes>
          <Route path="/" element = {<HomePage 
          products={products}
          cart={cart}
          setCart={setCart}
          />}/>
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

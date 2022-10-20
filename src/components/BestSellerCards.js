import React, {useState} from 'react'
import anthurium from '../images/products/anthurium-img.jpg'
import croton from '../images/products/croton-img.jpg'
import dracaena from '../images/products/dracaena-img.jpg'
import pothos from '../images/products/pothos-img.jpg'
import uniqid from 'uniqid'
import { type } from '@testing-library/user-event/dist/type'

export default function BestSellerCards() {
  const [anthuriumQuantity,setAnthuriumQuantity] = useState(0);
  const [crotonQuantity,setCrotonQuantity] = useState(0);
  const [dracaenaQuantity,setDracaenaQuantity] = useState(0);
  const [pothosQuantity,setPothosQuantity] = useState(0);

  const bestProducts = [{
    title: "Anthurium",
    imgSrc: anthurium, 
    price: "$20",
    id: uniqid(),
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
    plantQuantity: anthuriumQuantity
  },{
    title: "Croton",
    imgSrc: croton, 
    price: "$10",
    id: uniqid(),
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
    plantQuantity: crotonQuantity
  },{
    title: "Dracaena",
    imgSrc: dracaena, 
    price: "$30",
    id: uniqid(),
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
    plantQuantity: dracaenaQuantity
  },{
    title: "Pothos",
    imgSrc: pothos, 
    price: "$10",
    id: uniqid(),
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
    plantQuantity: pothosQuantity
  }]

  return (
    <>
    {bestProducts.map((product) => 
    <div className="card" key={product.id}>
      <img src={product.imgSrc} alt={`${product.title}`}  />
      <div className="product-des">
        <div>
          <p>{product.title}</p>
          <h3>{product.price}</h3>
        </div>
        <div className="quantity">
          <input type="text" value={product.plantQuantity} onChange={(e) => {product.setInput(e)}}/>
          <button className="quantity-btn" onClick={() => {product.setIncrement(+1)}}>+</button>
          <button className="quantity-btn" onClick={() => {product.setIncrement(-1)}}>-</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
   </div>
  )}
    </>
  )
}

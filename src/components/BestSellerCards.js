import React, {useState} from 'react'
import anthurium from '../images/products/anthurium-img.jpg'
import croton from '../images/products/croton-img.jpg'
import dracaena from '../images/products/dracaena-img.jpg'
import pothos from '../images/products/pothos-img.jpg'
import uniqid from 'uniqid'
import { type } from '@testing-library/user-event/dist/type'

export default function BestSellerCards() {
  const [anthuriumQuantity,setAnthuriumQuantity] = useState(0);

  const bestProducts = [{
    title: "Anthurium",
    imgSrc: anthurium, 
    price: "$20",
    id: uniqid(),
    plantQuantity: anthuriumQuantity
  },{
    title: "Croton",
    imgSrc: croton, 
    price: "$10",
    id: uniqid(),
    plantQuantity: 0
  },{
    title: "Dracaena",
    imgSrc: dracaena, 
    price: "$30",
    id: uniqid(),
    plantQuantity: 0
  },{
    title: "Pothos",
    imgSrc: pothos, 
    price: "$10",
    id: uniqid(),
    plantQuantity: 0
  }]

  const increment = (amount) => {
    setAnthuriumQuantity((currentAnthuriumQuantity) => {
      return currentAnthuriumQuantity + amount
    })
  }

  const numInput = (e) => {
    let target = e.target.value;
    let newQuantity = parseInt(target);
    setAnthuriumQuantity(newQuantity)
  }
  return (
    <>
    {bestProducts.map((product) => 
    <div className="card" key={product.id}>
      <h2>Quantity: {product.plantQuantity}</h2>
      <img src={product.imgSrc} alt={`${product.title}`}  />
      <div className="product-des">
        <div>
          <p>{product.title}</p>
          <h3>{product.price}</h3>
        </div>
        <div className="quantity">
          <input type="text" value={product.plantQuantity} onChange={numInput}/>
          <button onClick={() => {increment(+1)}}>+</button>
          <button onClick={() => {increment(-1)}}>-</button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
   </div>
  )}
    </>
  )
}

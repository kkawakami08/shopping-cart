import React, {useState} from 'react'
import anthurium from '../images/products/anthurium-img.jpg'

export default function BestSellerCards() {
  const bestProducts = [{
    title: "Anthurium",
    imgSrc: anthurium, 
    price: "$20",
  }]
  return (
    <div className="card">
      <img src={bestProducts[0].imgSrc} alt={`${bestProducts[0].title}`} />
      <div className="product-des">
        <p>{bestProducts[0].title}</p>
        <h3>{bestProducts[0].price}</h3>
      </div>
   </div>
  )
}

import React from 'react'
import anthurium from '../images/products/anthurium-img.jpg'
import croton from '../images/products/croton-img.jpg'
import dracaena from '../images/products/dracaena-img.jpg'
import pothos from '../images/products/pothos-img.jpg'
import uniqid from 'uniqid'

export default function BestSellerCards() {

  const bestProducts = [{
    title: "Anthurium",
    imgSrc: anthurium, 
    price: "$20",
    id: uniqid(),
  },{
    title: "Croton",
    imgSrc: croton, 
    price: "$10",
    id: uniqid(),
  },{
    title: "Dracaena",
    imgSrc: dracaena, 
    price: "$30",
    id: uniqid(),
  },{
    title: "Pothos",
    imgSrc: pothos, 
    price: "$10",
    id: uniqid(),
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
        <button className="add-to-cart">Add to Cart</button>
      </div>
   </div>
  )}
    </>
  )
}

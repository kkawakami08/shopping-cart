import React from 'react'

export default function BestSellerCards({products}) {
  const bestProducts = [products[0],products[1],products[2],products[3]]
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
          <input type="text" value={product.quantity} onChange={(e) => {product.setInput(e)}}/>
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

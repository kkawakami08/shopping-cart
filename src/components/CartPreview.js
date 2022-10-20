import React from 'react'

export default function CartPreview({cart,setCart}) {
  return (
    <div className="cart-preview">
      {cart.map((product) => 
       <div className="cart-product" key={product.id}>
        <img src={product.imgSrc} alt={`${product.title}`}  />
        <div>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
        </div>
        <div className="quantity-cart">
            <input type="text" value={product.plantQuantity} onChange={(e) => {product.setInput(e)}}/>
            <div>
              <button className="quantity-btn" onClick={() => {product.setIncrement(+1)}}>+</button>
              <button className="quantity-btn" onClick={() => {product.setIncrement(-1)}}>-</button>
            </div>
            <button className="add-to-cart">Remove</button>
        </div>
        
      </div>
      )}
    </div>
  )
}

import React from 'react'

export default function CartPreview({cart,setCart}) {
  return (
    <div className="cart-preview">
      {cart.map((product) => 
       <div className="cart-product" key={product.id}>
        <img src={product.imgSrc} alt={`${product.title}`}  />
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        <div className="quantity-cart">
            <input type="text" value={product.quantity} onChange={(e) => {product.setInput(e)}}/>
            <div>
              <button className="quantity-btn" onClick={() => {product.setIncrement(+1)}}>+</button>
              <button className="quantity-btn" onClick={() => {product.setIncrement(-1)}}>-</button>
            </div>
            <p className="remove">Remove</p>
        </div>
        
      </div>
      )}
    </div>
  )
}

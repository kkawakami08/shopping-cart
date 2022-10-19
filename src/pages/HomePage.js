import React from 'react'
import './HomePage.css'
import heroImg from '../images/hero-img.jpg'
import { Link } from 'react-router-dom'
import anthurium from '../images/products/anthurium-img.jpg'

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-img" style={{backgroundImage: `url(${heroImg})`}}>
        <h1>Cozy Up Your Home</h1>
          <button id="hero-btn"><Link to='/shop'>Shop Now</Link></button>
       </div>
       <div className="best-sellers">
        <h1>Best Sellers</h1>
        {/* map Array */}
        <div className="card-container">
          <div className="card">
            <img src={anthurium} alt="anthurium" />
            <div className="product-des">
              <p>Anthurium</p>
              <h3>$20</h3>
            </div>
          </div>
          <div className="card">
            <img src={anthurium} alt="anthurium" />
            <div className="product-des">
              <p>Anthurium</p>
              <h3>$20</h3>
            </div>
          </div>
          <div className="card">
            <img src={anthurium} alt="anthurium" />
            <div className="product-des">
              <p>Anthurium</p>
              <h3>$20</h3>
            </div>
          </div>
          <div className="card">
            <img src={anthurium} alt="anthurium" />
            <div className="product-des">
              <p>Anthurium</p>
              <h3>$20</h3>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

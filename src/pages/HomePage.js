import React from 'react'
import './HomePage.css'
import heroImg from '../images/hero-img.jpg'
import { Link } from 'react-router-dom'
import BestSellerCards from '../components/BestSellerCards'

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
          <BestSellerCards />
        </div>
       </div>
    </div>
  )
}

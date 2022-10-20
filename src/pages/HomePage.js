import React from 'react'
import './HomePage.css'
import heroImg from '../images/hero-img.jpg'
import { Link } from 'react-router-dom'
import BestSellerCards from '../components/BestSellerCards'
import Footer from '../components/Footer'

export default function HomePage({products}) {
  return (
    <div className="home-container">
      <div className="hero-img" style={{backgroundImage: `url(${heroImg})`}}>
        <h1>Cozy Up Your Home</h1>
          <button id="hero-btn"><Link to='/shop'>Shop All Plants</Link></button>
       </div>
       <div className="best-sellers">
        <h1>Best Sellers</h1>
        <div className="card-container">
          <BestSellerCards products={products}/>
        </div>
       </div>
       <Footer />
    </div>
  )
}

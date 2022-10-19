import React from 'react'
import './HomePage.css'
import heroImg from '../images/hero-img.jpg'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-img" style={{backgroundImage: `url(${heroImg})`}}>
        <h1>Cozy Up Your Home</h1>
          <button id="hero-btn"><Link to='/shop'>Shop Now</Link></button>
       </div>
    </div>
  )
}

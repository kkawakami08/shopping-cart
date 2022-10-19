import React from 'react'
import logo from '../images/logo-circle.png'
import cart from '../images/cart-icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">
            <img className="nav-logo" src={logo} alt="Plant-Posium Logo"/>
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop Our Plants</Link>
        </li>
        <li>
          <Link>
            <img className="cart" src={cart} alt="Cart Icon"/>
          </Link>
        </li>

      </ul>
    </div>
  )
}

import React from 'react'
import logo from '../images/logo-circle.png'
import emptyCartIcon from '../images/cart-icon.png'
import cartIcon from '../images/cart-icon-item.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar({cart}) {

  return (
    <div className="nav-container">
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
            <Link to="/cart">
              {cart.length <= 0 ? (
                <img className="cart" src={emptyCartIcon} alt="Empty Cart Icon" />
              ):(
                <img className="cart" src={cartIcon} alt="Cart Icon" />
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

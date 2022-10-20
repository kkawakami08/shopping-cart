import React, {useState} from 'react'
import logo from '../images/logo-circle.png'
import cartIcon from '../images/cart-icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
import CartPreview from './CartPreview'

export default function NavBar({cart,setCart}) {
  const [visible, setVisible] = useState(true);

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
              <img className="cart" src={cartIcon} alt="Cart Icon" onMouseEnter={() => {setVisible(true)}} onMouseLeave={() => {setVisible(false)}}/>
            </Link>
          </li>

        </ul>
      </div>
      {visible && (
        <CartPreview cart={cart} setCart={setCart}/>
      )}
      
    </div>
  )
}

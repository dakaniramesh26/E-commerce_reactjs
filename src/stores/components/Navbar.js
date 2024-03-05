import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
 

const Navbar = () => {
  const {cartItems}=useCart()
  return (
    <>
    <div className='navSection'>
      <div className='title'><h2>E-Mart</h2></div>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
  <div className='cart'> <h2>Cart { cartItems.length}</h2></div>
</Link>
    </div>
    <div className='subMenu'>
      <ul>
        <Link to="/Mobiles"><li>Mobiles</li></Link>
        <Link to="/Computers"><li>Computers</li></Link>
        <Link to="/watch"><li>Watches</li></Link>
        <Link to="/men"><li>Men Fashion</li></Link>
        <Link to="/women"><li>Women Dressing</li></Link>
        <Link to="/furniture"><li>Furniture</li></Link>
        <Link to="/Ac"><li>Ac</li></Link> 
        <Link to="/Kitchen"><li>Kitchen</li></Link>
        <Link to="/fridge"><li>Fridge</li></Link>

      

      </ul>
    </div>
    </>
  )
}

export default Navbar
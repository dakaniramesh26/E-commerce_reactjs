import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
 

const Navbar = () => {
  const {cartItems}=useCart()
  return (
    <>
   
    <div className='navSection' >
      {/* <div className='title'><h2>E-Mart</h2></div> */}
      <Link to="/" ><img style={{width:"50px"}} src='https://cdn-icons-png.flaticon.com/128/845/845022.png'/></Link>
      <Link to="/" style={{ textDecoration: 'none' }}><h2 style={{fontSize:"30px", color:"white", fontFamily:"Segoe Print", fontWeight:"bolder" }}>E-Mart</h2>
</Link>
<div style={{position: "absolute", top: "35px",right: "120px"}}> <Link to="/register" style={{ textDecoration: 'none' }}><h2 style={{ fontSize:"15px", color:"white", fontFamily:"Segoe Print", fontWeight:"bolder" }}>Register/Login</h2>
</Link></div>

      <Link to="/register" style={{ textDecoration: 'none' }}>
  <div className='cart'> <img style={{width:"50px", marginRight:"-26px", marginTop:"10px" }} src='https://cdn-icons-png.flaticon.com/128/8172/8172244.png'></img> {cartItems.length}</div>
</Link>
    </div>
    <div className='subMenu'>
      <ul>
        <Link to="/Mobiles"><li><b>Mobiles</b></li></Link>
        <Link to="/Computers"><li><b>Computers</b></li></Link>
        <Link to="/watch"><li><b>Watches</b></li></Link>
        <Link to="/men"><li><b>Men Fashion</b></li></Link>
        <Link to="/women"><li><b>Women Dressing</b></li></Link>
        <Link to="/furniture"><li><b>Furniture</b></li></Link>
        <Link to="/Ac"><li><b>Ac</b></li></Link> 
        <Link to="/Kitchen"><li><b>Kitchen</b></li></Link>
        <Link to="/fridge"><li><b>Fridge</b></li></Link>

      

      </ul>
    </div>
    </>
  )
}

export default Navbar
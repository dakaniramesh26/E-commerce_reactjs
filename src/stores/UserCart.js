import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const UserCart = () => {
    const { cartItems, addToCart, removeFromCart,removeCart } = useCart();

    // console.log(cartItems);

    return (
        <>
        <Navbar />
        <div>
        
            {cartItems.length === 0 ? (<>
                <h1 style={{margin:"10px" }} className='y-cart'><b style={{ fontFamily:"Ink Free"}}>Your cart is empty </b></h1>
                <center><img width={400}  src='https://img.freepik.com/free-vector/boy-mother-shopping-grocery_1308-31160.jpg?t=st=1710395679~exp=1710399279~hmac=967f51b2e75b9385c78fc0b40993ee0d8606d6f5c95cceb3b5354817f1d269b9&w=900' className='empty'></img></center>
               
                </>
                ) : (
                    
                    <div>
                        <h2  style={{margin:"10px" }} className='y-cart'><b style={{ fontFamily:"Ink Free"}}>Your cart </b></h2>
                {cartItems.map((item) => {
                  return (
                    <>
                    <center> <div class="card mb-3" style={{width: "800px", margin:"20px", backgroundColor:"#F7F7F7"}} key={item.id}>
                    <div class="row g-0">
                     <div class="col-md-4">
                     <img style={{margin:"30px 30px 30px 30px", boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)", objectFit:"cover" ,width:"auto", height:"250px"}} src={item.image} class="img-fluid rounded-start" alt="image"/>
                     </div>
                    <div class="col-md-8">
                     <div class="card-body" style={{marginTop:"70px"}}>
                     {/* <h3>{item.product}</h3> */}
                     <h2>₹{item.price}</h2>
                    <h5>{item.model}</h5>
        <a href='#' className='btn btn-secondary'  onClick={() => addToCart(item)}>+</a>
        <span style={{padding:"8px", border:"none", fontSize:"20px"}}>{item.quantity}</span>
        <a href='#' className='btn btn-secondary' onClick={() => removeFromCart(item)}>-</a> 
        <a href="#" class="btn btn-danger"  style={{marginLeft:"20px"}} onClick={() => removeCart(item)}> Remove</a>
      </div>
    </div>
  </div>
</div>

</center>
    </>
                    
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default UserCart;

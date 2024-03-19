import React from "react";
import { mobileData } from "../data/mobiles";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCart } from "../context/CartContext";

const MobileSingle = () => {
  const { id } = useParams();

  const {addToCart, cartItems} = useCart()

  const product = mobileData.find((item) => item.id === id);

  return (
    <>
    <Navbar/>
      <center>
      

<div class="card mb-3" style={{width: "1000px", margin:"20px", backgroundColor:"#F7F7F7"}}>
<div class="row g-0">
<div class="col-md-4">
 <img style={{margin:"30px ", boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)", objectFit:"cover",  height:"220px"}} src={product.image} class="img-fluid rounded-start" alt="image"/>
</div>
<div class="col-md-8">
 <div class="card-body" style={{marginTop:"30px"}}>
   <h2 class="card-title" >{product.company}</h2>
   <h5>{product.model}</h5>
   <h3>₹ {product.price}</h3>
   <p class="card-text">{product.description}</p>
   <a href="#" class="btn btn-primary" onClick={()=>addToCart(product)}>Add To Cart</a>
 </div>
</div>
</div>
</div>
      </center>
      
    </>
  );
};

export default MobileSingle;
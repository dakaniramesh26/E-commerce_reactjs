import React, { useState } from 'react'
import { menData } from '../data/men'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const MenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        menData : menData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{menData.map((phone)=>{
    return(
        <div className='pro-input'>
            <label style={{fontFamily:"Aharoni"}} >
                <input type="radio" 
                checked = {selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)}
                />
                {phone.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/men/${item.id}`}>
                < div className="pageImg">
                    <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)"}} src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel" style={{fontFamily:"Aharoni"}} >
                    {item.brand}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default MenPage
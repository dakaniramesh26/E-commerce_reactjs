
import React from 'react'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'

const Men = () => {

    const firstFiveImages = menData.slice(0,5)

  return (
    <>
     <div className="proTitle">
        <h2 style={{fontFamily:"Aharoni"}} >Men Fashion</h2>
      </div>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                      <Link to='/men'>
                         <img style={{ boxShadow:"3px 3px 10px rgb(0 0 0 / 0.2)"}} className='proImage' src={item.image} alt="" />
                      </Link>
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Men
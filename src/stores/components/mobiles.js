
import React from 'react'


import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'


const Mobiles = () => {

    const firstFiveImages = mobileData.slice(0,5)

    return (
     <>
      <div className="proTitle">
          <h2 style={{fontFamily:"Aharoni"}} >Mobiles</h2>
        </div>
     <div className='proSection'>
          {
              firstFiveImages.map((item)=>{
                  return(
                      <div className='imgBox'>
                          <Link to='/mobiles'>
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

export default Mobiles
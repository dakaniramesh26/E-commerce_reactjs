import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const Watch = () => {

    const firstFiveImages = watchData.slice(0,5)

  return (
    <>
    <h2 style={{fontFamily:"Aharoni"}} >Watches</h2>
    <div className='proSection'>
         {
          firstFiveImages.map((item)=>{
           return(
               <div className='imgBox'>
                <Link to='/watch'>
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

export default Watch
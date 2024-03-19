
import React from 'react'

import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'


const Fridge = () => {

    const firstFiveImages = fridgeData.slice(0,5)

  return (
   <>
    <div className="proTitle">
        <h2 style={{fontFamily:"Aharoni"}} >Fridges</h2>
      </div>
   <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return(
                    <div className='imgBox'>
                        <Link to='/fridge'>
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

export default Fridge
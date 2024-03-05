import React, { useEffect } from 'react'

function Use() {
    const[value,setValue]=useState(0)
    useEffect(()=>{
        console.log("hello")
    })
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={setValue(value+1)}>click</button>


    </div>
  )
}

export default Use
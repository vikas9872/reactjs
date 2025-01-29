import React, { useState } from 'react'
import "./UseState.css"
const UseState = () => {
    const[count,setCount]=useState(0);
    const handleAddition=()=>{
        setCount(count+1)
    }
    const handleSubstraction=()=>{
        setCount(count > 0 ? count - 1 : 0)
    }
    return (
        <div>
            <button onClick={handleAddition} className='buttons'>Add</button>
            <div>{count}</div>
            <button onClick={handleSubstraction} className='buttons'>Substract</button>
        </div>
    )
}

export default UseState

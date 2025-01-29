import React, { useState } from 'react'
import "./OnChange.css"

const OnChange = () => {
    const [username,setUsername]=useState("")
    const [comment, setComment]=useState("")
    const [payment, setPayment]=useState("")
    const [shipping, setShipping]=useState("")
    const handleNameChange=(e)=>{
        setUsername(e.target.value)
    }
    const handleCommentChange=(e)=>{
        setComment(e.target.value)
    }
    const handlePaymentChange=(e)=>{
        setPayment(e.target.value)
    }
    const handleShippingChange=(e)=>{
        setShipping(e.target.value)
    }
    return (
        <div className='onchange'>
            <input type="text" value={username}  onChange={handleNameChange}/>
            <p>Name: {username}</p>

            <textarea value={comment} onChange={handleCommentChange}/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value={""}>Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick up
            </label><br />
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default OnChange

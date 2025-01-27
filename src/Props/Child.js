import React from 'react'
import "./Child.css"
const Child = (props) => {
  return (
    <div className='child'>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>isStudent: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Child

import React from 'react'

const Childcomponent = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
    </div>
  )
}

export default Childcomponent
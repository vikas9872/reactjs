import React from 'react'
import "./Destructuringdetails.css"
const Destructuringdetails = ({sname,scourse,sisStudent}) => {
  return (
    <div className="destructuring">
      <p>Name: {sname}</p>
      <p>Course: {scourse}</p>
      <p>Student: {sisStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Destructuringdetails

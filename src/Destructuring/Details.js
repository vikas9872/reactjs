import Destructuringdetails from "./Destructuringdetails"
import React from 'react'

const Details = () => {
  return (
    <div>
      <Destructuringdetails sname="Emma" scourse="CSE" sisStudent={false}/>
      <Destructuringdetails sname="Alex" scourse="CSE" sisStudent={true}/>
      <Destructuringdetails sname="Falex" scourse="CSE" sisStudent={false}/>
    </div>
  )
}

export default Details

import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name={"Fedrik"} course={"CSE"} isStudent={true}/>
    </div>
  )
}

export default Parent

import { fruits } from './Lists'
import React from 'react'
import "./PrintList.css"

const PrintList = () => {
  return (
    <div>
      {
        fruits.map((fruitElement)=>(
            <ul>
                <li>{fruitElement}</li>
            </ul>
        ))
      }
    </div>
  )
}

export default PrintList

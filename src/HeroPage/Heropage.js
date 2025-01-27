import React from 'react'
import Functioncomponent from '../Components/Functioncomponent'
import Parent from '../Props/Parent'
import Details from '../Destructuring/Details'
import PrintList from '../ListsRendering/PrintList'
const Heropage = () => {
  return (
    <div>
      <Functioncomponent/>
      <hr />
      <Parent/>
      <hr />
      <Details/>
      <hr />
      <PrintList/>
    </div>
  )
}

export default Heropage

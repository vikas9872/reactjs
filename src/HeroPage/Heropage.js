import React from 'react'
import Functioncomponent from '../Components/Functioncomponent'
import Parent from '../Props/Parent'
import Details from '../Destructuring/Details'
import PrintList from '../ListsRendering/PrintList'
import UserGreeting from '../ConditionalRendering/UserGreeting'
import PrintObjects from '../ObjectRedering/PrintObjects'
import UseState from '../Hooks/UseState/UseState'
import OnChange from '../Hooks/OnChage/OnChange'
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
      <hr />
      <UserGreeting  isLoggedIn={true} username="Alex"/>
      <hr />
      <PrintObjects/>
      <hr />
      <UseState/>
      <hr />
      <OnChange/>
    </div>
  )
}

export default Heropage

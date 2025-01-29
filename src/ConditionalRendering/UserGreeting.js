import React from 'react'
import "./UserGreeting.css"
const UserGreeting = (props) => {
  return (
    <div className='user_greeting'>
        <p>Logged In: {props.isLoggedIn ? "Yes" : "No"}</p>
        <p>Name: {props.username}</p>
    </div>
  )
}

export default UserGreeting

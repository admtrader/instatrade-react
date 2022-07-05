import React from 'react'

const Info = ({user}) => {
  return (
    <div>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email:{ user.email}</li>
        <li>Posts:{ user.posts}</li>
      </ul>
      
      
    </div>
  )
}

export default Info
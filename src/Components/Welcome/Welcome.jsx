import React from 'react'
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to the App!</h1><br/><br/>
      <h1>Take a look around, while we build the site!</h1>
      <br/><br/>
      <Link to={'/posts'}>The Main Feed</Link>
    </div>
  )
}

export default Welcome
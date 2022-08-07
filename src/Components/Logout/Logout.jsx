import React from 'react'
import style from './Logout.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Logout = () => {

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token');
  }, [])

  return (
    <div className={style.mainDiv}>
      <h1>You were successfully logged out.</h1>
      <h3>Go back to Log in.</h3>
      <div className={style.btnDiv}>
        <button onClick={() => navigate('/login')}>Go</button>
      </div>
    </div>
  )
}

export default Logout
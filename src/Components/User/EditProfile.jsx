import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const EditProfile = () => {
  
  const navigate = useNavigate()
  const userToken = JSON.parse(localStorage.getItem('token'))
  const [formData, setFormData] = useState(null)

 
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://instatrade-api.herokuapp.com/profile`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${userToken.token}`,
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      navigate('/profile')
    })
  }

  return (
    <div style={{border: 'solid white 4px', width: '60%', margin: 'auto', marginTop: '70px', borderRadius: '6px'}}>
      <h3 style={{textAlign: 'center'}}>Update Your Profile</h3>
      <form onSubmit={handleSubmit} style={{width: '50%', margin: 'auto'}}>
        <label>Email:<br/>
          <input type='text' id='email' value={formData?.email} onChange={handleChange} />
        </label><br/>
        <label>Username:
          <input type='text' id='username' value={formData?.username} onChange={handleChange} />
        </label><br/>
        <input type='submit' value='Update' />
      </form>
      <button onClick={() => navigate('/profile')} >Go Back</button>
    </div>
  )
}

export default EditProfile
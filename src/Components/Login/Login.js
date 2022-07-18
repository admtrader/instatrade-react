import { useState } from "react";
import "./Login.css"
import { Link } from 'react-router-dom';


async function loginUser(credentials) {
  return fetch('https://instatrade-api.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}



export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      uname: username,
      pw: password,
    });
    console.log(token)
    if(token.msg === 'you entered the wrond pw'){
      console.log('you made it here')
      setMessage('You entered the wrong password.')
      console.log(message)
    } else if(token.msg === 'no user in db'){
      setMessage('You need to sign up first.')
    } else {setToken(token);}
    // setToken(token);
    
  }

  return(
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" className="formInput" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" className="formInput" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="formSubmitButton" type="submit">Submit</button>
        </div><br/><br/>
        {message ? <h4 style={{color: 'red'}}>{message}</h4> : <p></p>}
        <Link to='/signup' >Sign Up Here!</Link>
      </form>
    </div>
  )
}


import { useState } from "react";
import "./Signup.css"


async function signupUser(credentials) {
  return fetch('https://instatrade-api.herokuapp.com/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}



export default function Signup() {
  const [uname, setUserName] = useState();
  const [pw, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const signupMessage = await signupUser({
      uname: uname,
      pw: pw,
      email: email,
    });
    
  }

  return(
    <div className='signup-wrapper'>
      <h1>Please Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <div>
          <button className="formSubmitButton" type="submit">Sign Up!</button>
        </div>
      </form>
      <br/><br/>
    </div>
  )
}


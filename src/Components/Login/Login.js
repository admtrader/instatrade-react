import { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';


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



export default function Login({ setToken, user, setUser }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const [clickedSubmit, setClickedSubmit] = useState(false);

  const navigate = useNavigate();


  function saveUser(token) {
    let userObj = JSON.parse(atob(token.token.split('.')[1])).user;
    console.log('this is the userOBJ from',userObj);
    setUser(userObj);
  }
  



  const handleSubmit = async e => {
    e.preventDefault();
    setClickedSubmit(true);
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
    } else {
      setToken(token);
      saveUser(token);
      setClickedSubmit(false);
      navigate('/posts')
    }
  }


  return(
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      {clickedSubmit ? <h2>Loading...</h2> : null}
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


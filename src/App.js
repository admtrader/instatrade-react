import { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Login from './Components/Login/Login';
import useToken from './Components/Login/useToken';



function App() {

  const [user, setUser] = useState();
  
  
  const { token, setToken} = useToken();
 


  if(!token) {

    


    return <Login setToken={setToken} user={user} setUser={setUser} />
  }
  
  return (
    <div className="App">
      <nav>
        <Link className='link' to="/posts">Feed</Link> | {" "}
        <Link className='link' to="/posts/new">New Post</Link> | {" "}
        <Link className='link' to="/profile">Profile</Link>
      </nav>
      <Outlet  />
    </div>
  );
}

export default App;

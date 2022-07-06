import { useEffect } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import Login from './Components/Login/Login';
import useToken from './Components/Login/useToken';



function App() {

  // useEffect(() => {
  //   const tokenString = sessionStorage.getItem('token');
  //   console.log(tokenString)
  //   if(tokenString !== null || undefined) {
  //     const userToken = JSON.parse(tokenString)
  //     setToken(userToken.token)
  //   } else {
  //     return null
  //   }
  // })

  const { token, setToken } = useToken();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="App">
      <nav>
        <Link className='link' to="/posts">Feed</Link> | {" "}
        <Link className='link' to="/posts/new">New Post</Link> | {" "}
        <Link className='link' to="/profile">Profile</Link>
      </nav>
      
        <Outlet />
    </div>
  );
}

export default App;

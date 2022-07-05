import logo from './logo.svg';
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
        <Link to="/posts">Feed</Link> | {" "}
        <Link to="/posts/new">New Post</Link> | {" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <img src={logo} className="App-logo" alt="logo" />
        <Outlet />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';



function App() {

  
  return (
    <div className="App">
      <nav>
        <Link to="/posts">Feed</Link> | {" "}
        <Link to="/posts/new">New Post</Link>
      </nav>
      <img src={logo} className="App-logo" alt="logo" />
      <Outlet />
    </div>
  );
}

export default App;

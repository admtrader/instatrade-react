import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PostContainer from './Components/PostContainer';
import FormContainer from './Components/FormContainer';

function App() {

  const [userPosts, setUserPosts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/post')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setUserPosts(data)
    })
  }, [])



  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <PostContainer posts={userPosts} />
      <br/>
      <br/>
      <FormContainer />
    </div>
  );
}

export default App;

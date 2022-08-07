import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Posts from './Components/Feed/Posts';
import PostId from './Components/Feed/PostId';
import Feed from './Components/Feed/Feed';
import FormContainer from './Components/FormPost/FormContainer';
import Profile from './Components/User/Profile';
import Signup from './Components/Signup/Signup';
import Welcome from './Components/Welcome/Welcome';
import Logout from './Components/Logout/Logout';
import EditProfile from './Components/User/EditProfile';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path='/logout' element={<Logout />} />
      <Route path='/updateprofile' element={<EditProfile />} />
      <Route path='/' element={<App />}>
        <Route index element={<Welcome />} />
        <Route path='posts' element={<Posts />}>
          <Route index element={<Feed />} />
          <Route path=':id' element={<PostId />} /> 
          <Route path='new' element={<FormContainer />} /> 
        </Route>
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<h1>Sorry! We haven't got this far yet! Try again later!</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

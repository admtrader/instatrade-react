import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Posts from './Components/Posts';
import PostId from './Components/PostId';
import Feed from './Components/Feed';
import FormContainer from './Components/FormContainer';
import Profile from './Components/User/Profile';
import Signup from './Components/Signup/Signup';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path='/' element={<App />}>
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

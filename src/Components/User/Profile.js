import React, { useState, useEffect } from 'react';
import Info from './Info';
import useSWR from 'swr';


const Profile = () => {

const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);

//fetcher setup for swr
const URL = "http://localhost:8000/profile";
const options = {
  method: "GET",
  headers: {
    "Authorization": `${userToken.token}`
  }
}
const fetcher = (...args) => fetch(...args, options).then(res => res.json());

//swr to fetch user profile data
const { data, error } = useSWR(URL, fetcher)


const [userinfo, setUserinfo] = useState();

  // before i found SWR
  // useEffect(() => {
  //   fetch("http://localhost:8000/profile", {
  //     method: "GET",
  //     headers: {
  //       "Authorization": `${userToken.token}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUserinfo(data);
  //     });
  // }, []);



  return (
    <div>
      <u><h1>Info about You</h1></u>
      <div>
        {data ? <h1>Username: {data.username}</h1> : <h1>loading...</h1>}
        {data ? <h1>Email: {data.email}</h1> : <h1>loading...</h1>}
        {data ? <h1>Posts: {data.posts}</h1> : <h1>loading...</h1>}
      </div>
      
      
      
    </div>
  )
}

export default Profile
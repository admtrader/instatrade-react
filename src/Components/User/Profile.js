import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import useSWR from 'swr';
import "./Profile.css";


const Profile = () => {

const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);

//fetcher setup for swr
const URL = "https://instatrade-api.herokuapp.com/profile";
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
      <u><h1>User Profile</h1></u>
      <div>
        <div style={{display: 'flex', flexWrap: 'wrap' , justifyContent: 'space-evenly', borderBottom: 'solid 3px cornflowerblue'}}>
          {data ? <h1>Username: {data.username}</h1> : <h1>loading...</h1>}
          {data ? <h1>Email: {data.email}</h1> : <h1>loading...</h1>}
        </div>
        
        <h2>User Posts</h2>        
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {/* {data ? <div className='posts-div'>{data.posts.map((post, i) => <Link className='post-link' key={`${i}`} to={`/posts/${post._id}`}>{post.name}</Link>)}</div> : <h1>loading...</h1>} */}
        {data?.posts.map((post, i)=> <PostCard post={post} key={i}/> )}
        {data?.posts.length === 0 ? <p>You dont have any posts.</p> : <p></p>}
        </div>
      </div>
      
      
      
    </div>
  )
}

export default Profile
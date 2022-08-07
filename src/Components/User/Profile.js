import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';
import useSWR from 'swr';
import "./Profile.css";

//Stil need to implement an update component and route.


const Profile = () => {

const tokenString = localStorage.getItem('token');
const userToken = JSON.parse(tokenString);
const navigate = useNavigate();

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
const { data, error } = useSWR(URL, fetcher, { refreshWhenHidden: true, refreshInterval: 1000 })


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

  const Logout = () => {
    localStorage.removeItem('token')
    navigate('/logout');
  }



  return (
    <div>
      <u><h1>Account Info</h1></u>
      <div>
        {/* <div style={{display: 'flex', flexWrap: 'wrap' , justifyContent: 'space-evenly', borderBottom: 'solid 3px cornflowerblue'}}>
          {data ? <h1>Username: {data.username}</h1> : <h1>loading...</h1>}
          {data ? <h1>Email: {data.email}</h1> : <h1>loading...</h1>}
        </div> */}
        <div className='accDiv'>
          <h2>Account Summary</h2>
          <div className='sumParentDiv'>
            <h3>Email</h3>
            <div className='sumDiv'>
              <div className='sumDivChild'>
                <p>Primary Email:</p>
              </div>
              <div className='sumDivChild'>
                <p>{data?.email}</p>
              </div>
            </div>
          </div>
          <div className='sumParentDiv'>
            <h3>Name</h3>
            <div className='sumDiv'>
              <div className='sumDivChild'>
                <p>Username:</p>
              </div>
              <div className='sumDivChild'>
                <p>{data?.username}</p>
              </div>
            </div>
          </div>
          <div className='btnDiv'>
            <div className='btnContainer'>
              <div>
                <button onClick={Logout}>Log Out</button>
              </div>
              <div>
                <button onClick={() => navigate('/updateprofile')}>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>

        
          {/* going to implement a delete button here for the posts as well as an edit button */}

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
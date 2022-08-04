import React from 'react'
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import "./Post.css"
import useSWR from 'swr';

const PostId = ({user}) => {

  let params = useParams();
  let navigate = useNavigate();

  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);

  //fetcher setup for swr
  const URL = `https://instatrade-api.herokuapp.com/post/${params.id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Authorization": `${userToken.token}`
    }
  }

  const handleDelete = () => {
    fetch(URL, options)
    .then(data => data.json())
    .then(newData => {
      console.log(newData)
      navigate('/profile', { replace: true })
    })


  }
  
  const posts = useOutletContext();
  
  let mainPost = {};
  posts.forEach(post => {
    if(post._id === params.id){
      mainPost = post;
    }
  });


  return (
    <div style={{background: 'cornflowerblue', margin: '8rem', borderRadius: '10px'}}>
      <h1>{mainPost.name}</h1>
      <img style={{height: "40vh", width: "auto", borderRadius: '6px'}} src={mainPost.imageUrl} alt="shoe" />
      <h2>{mainPost.body}</h2>
      {/* <div>{data ? <h1>{data}</h1> : <span></span>}</div> */}
      
    </div>
  )
}

export default PostId
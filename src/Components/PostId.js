import React from 'react'
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import './Post.css';
import useSWR from 'swr';

const PostId = ({}) => {

  let params = useParams();
  let navigate = useNavigate();

  const tokenString = sessionStorage.getItem('token');
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
    <div>
      <h1>{mainPost.name}</h1>
      <img style={{height: "40vh", width: "auto"}} src={mainPost.imageUrl} alt="shoe" />
      <h2>{mainPost.body}</h2>
      <div className='btnbox'>
        <button onClick={handleDelete} className='btnDel' >Delete Post</button>
        <button className='btnUp' >Update Post</button>
      </div>
      {/* <div>{data ? <h1>{data}</h1> : <span></span>}</div> */}
      
    </div>
  )
}

export default PostId
import React from 'react'
import { useOutletContext, useParams, } from "react-router-dom";

const PostId = ({}) => {

  const posts = useOutletContext();
  let params = useParams();
  let mainPost = {};
  posts.forEach(post => {
    if(post._id === params.id){
      mainPost = post;
    }
  });


  return (
    <div>
      <h1>{mainPost.name}</h1>
      <img src={mainPost.imageUrl} alt="shoe" />
      <h2>{mainPost.body}</h2>
      
    </div>
  )
}

export default PostId
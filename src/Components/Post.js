import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Post.css"



const Post = ({post}) => {

    

    
    
    

  return (
    <div className="PostDiv">
      <h1 className="PostName">{post.name}</h1>
      <div className="imgbox">
        <img className="PostImg" src={post.imageUrl} alt="img" />
      </div>
      <h3 className="PostBody">{post.body}</h3>
      <Link to={`/posts/${post._id}`}>More info</Link>
      
    </div>
  );
}

export default Post
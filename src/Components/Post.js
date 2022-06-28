import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Post.css"



const Post = ({post}) => {

    

    
    
    

  return (
    <div className="PostDiv" style={{ backgroundColor: "#c0ffee" }}>
      <h1 className="PostName">{post.name}</h1>
      <Link to={`/posts/${post._id}`}>More info</Link>
      <div className="imgbox">
        <img className="PostImg" src={post.imageUrl} alt="img" />
      </div>
      <h3 className="PostBody">{post.body}</h3>
      
    </div>
  );
}

export default Post
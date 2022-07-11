import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Post.css"



const Post = ({post}) => {

    

    
    
    //this page needs refactored

  return (
    <div className="PostDiv">
      <div className="imgbox">
        <img className="PostImg" src={post.imageUrl} alt="img" />
      </div>
      <div>
        <h1 className="PostName">{post.name}</h1>
        <h3 className="PostBody">{post.body}</h3>
        <Link to={`/posts/${post._id}`}><button className='btnLink'>FindOut More</button></Link>
      </div>
    </div>
  );
}

export default Post
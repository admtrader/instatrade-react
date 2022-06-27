import React from 'react'
import "./Post.css"



const Post = ({post}) => {

    

    
    
    

  return (
    <div className="PostDiv" style={{ backgroundColor: "#c0ffee" }}>
      <h1 className="PostName">{post.name}</h1>
      <div className="imgbox">
        <img className="PostImg" src={post.imageUrl} alt="img" />
      </div>
      <h3 className="PostBody">{post.body}</h3>
    </div>
  );
}

export default Post
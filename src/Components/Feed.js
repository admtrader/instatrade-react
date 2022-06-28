import {useEffect, useState} from 'react'
import Post from "./Post";
import { useOutletContext } from 'react-router-dom';


const Feed = () => {

  const posts = useOutletContext();

  return (
    <div>
      {posts.map(post => <Post post={post} key={post._id} />)}
     
    </div>
  )
}

export default Feed 
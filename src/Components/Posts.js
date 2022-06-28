import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Posts = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/post")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserPosts(data);
      });
  }, []);

  return (
    <div>
      <Outlet context={userPosts} />
    </div>
  );
};

export default Posts;

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import useSWR from "swr";

const Posts = () => {
  const [userPosts, setUserPosts] = useState([]);

  const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);

//fetcher setup for swr
const URL = "https://instatrade-api.herokuapp.com/post";
const options = {
  method: "GET",
  headers: {
    "Authorization": `${userToken.token}`
  }
}
const fetcher = (...args) => fetch(...args, options).then(res => res.json());

//swr to fetch user profile data
const { data, error } = useSWR(URL, fetcher, { refreshWhenHidden: true, refreshInterval: 1000 })




  //Prior to SWR
  // useEffect(() => {
  //   fetch("http://localhost:8000/post")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setUserPosts(data);
  //     });
  // }, []);

  return (
    <div>
      {/* <Outlet context={userPosts} /> */}
      {data ? <Outlet context={data} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default Posts;

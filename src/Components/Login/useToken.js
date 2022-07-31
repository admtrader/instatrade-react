import { useState } from "react";

export default function useToken() {
  
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken.token
    
  };
  
  
  const [token, setToken] = useState(() => {
    const tok = localStorage.getItem('token');
    return tok !== null;
  });
  

  const saveToken = userToken => {
    localStorage.removeItem('token');
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

 


  return {
    setToken: saveToken,
    token,
  }

}

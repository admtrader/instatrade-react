import React, { useState } from "react";
import "./Form.css";


const FormPost = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImage] = useState('');
		const [message, setMessage] = useState("");


		const tokenString = sessionStorage.getItem('token');
		const userToken = JSON.parse(tokenString)
		

    let handlePost = async (e) => {
      e.preventDefault();
			try {
				let res = await fetch("https://instatrade-api.herokuapp.com/post", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `${userToken.token}`,
					},
					body: JSON.stringify({
						name: name,
						date: date,
						body: body,
						imageUrl: imageUrl
					}),
				});
				let resJson = await res.json();
				if(res.status === 200) {
					setMessage("Post created successfully");
				} else {
					setMessage("Some error occured");
				}
				
			} catch (err) {
				
			}
				


    }



    return (<div className="postDiv">
        <form onSubmit={handlePost}>
            <label>Post Title: </label>
            <input 
              type='text'
              value={name}
							onChange={(e) => setName(e.target.value)}
            />
						<br/><br/>
						<label>Post Date: </label>
						<input 
              type='text'
              value={date}
							onChange={(e) => setDate(e.target.value)}
            />
						<br/><br/>
						<label>Post Body: </label>
						<input 
              type='text'
              value={body}
							onChange={(e) => setBody(e.target.value)}
            />
						<br/><br/>
						<label>Image URL: </label>
						<input 
              type='text'
              value={imageUrl}
							onChange={(e) => setImage(e.target.value)}
            />
						<br/><br/>
					<input type='submit' value='Submit' />
        </form>
				<br/>
				<br/>
				<div className="message">{message ? <p>{message}</p> : null}</div>
	
                  
    	</div>
		)



}


export default FormPost
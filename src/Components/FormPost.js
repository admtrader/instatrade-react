import React, { useState } from "react";

const FormPost = () => {

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImage] = useState('');
		const [message, setMessage] = useState("");

    let handlePost = async (e) => {
      e.preventDefault();
			try {
				let res = await fetch("http://localhost:8000/post", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
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
					setMessage("User created successfully");
				} else {
					setMessage("Some error occured");
				}
				
			} catch (err) {
				
			}
				


    }



    return (<div>
        <form onSubmit={handlePost}>
            <label>Post Title:</label>
            <input 
              type='text'
              value={name}
							onChange={(e) => setName(e.target.value)}
            />
						<br/>
						<label>Post Date:</label>
						<input 
              type='text'
              value={date}
							onChange={(e) => setDate(e.target.value)}
            />
						<br/>
						<label>Post Body</label>
						<input 
              type='text'
              value={body}
							onChange={(e) => setBody(e.target.value)}
            />
						<br/>
						<label>Image URL:</label>
						<input 
              type='text'
              value={imageUrl}
							onChange={(e) => setImage(e.target.value)}
            />
						<br/>
					<input type='submit' value='Submit' />
        </form>
				<br/>
				<br/>
				<div className="message">{message ? <p>{message}</p> : null}</div>
				
                  
    	</div>
		)



}


export default FormPost
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import Modal from '../Modal/Modal'

const PostCard = ({post}) => {
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)
  
  useEffect(() => {
    if(isDeleted){
      fetch(`https://instatrade-api.herokuapp.com/post/${post._id}`, {
        method: 'DELETE'
      })
      .then(res => console.log(res.status))
      
    }
  }, [isDeleted])
  
  
  
  
  return (
    
      <div style={polaroid}>
        <div style={{position: 'relative'}}>
          <button style={editBtn}><RiEdit2Line/></button>
          <button onClick={() => setIsOpen(true)} style={delBtn}><RiCloseLine/></button>
        </div>
        <img style={{width: '200px', borderRadius: '16px 16px 0 0' , height: '200px', objectFit: 'cover',  }}src={post.imageUrl} />
        <div style={container}>
          <p>{post.name}</p>
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} setIsDeleted={setIsDeleted}/>}
      </div>
  )
}

export default PostCard


const polaroid = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '200px',
  marginBottom: '25px',
  borderRadius: '16px',
  boxShadow: '6px 6px black',
  background: '#000',
  color: '#fff',

    
}

const container = {
  textAlign: 'center',
  padding: '10px 10px',
}

const editBtn = {
  cursor: 'pointer',
  background: 'white',
  border: 'solid black 2px',
  color: 'black',
  position: 'absolute',
  top: '0',
  left: '0',
  marginLeft: '-7px',
  marginTop: '-7px',
}


const delBtn = {
  cursor: 'pointer',
  background: 'white',
  border: 'solid black 2px',
  color: 'red',
  position: 'absolute',
  top: '0',
  right: '0',
  marginRight: '-7px',
  marginTop: '-7px',
}
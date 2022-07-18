import React from 'react'

const PostCard = ({post}) => {
  console.log(post)
  return (
    // // <div style={{border: 'solid 5px cornflowerblue', borderRadius: '16px', width: '20rem', display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between'}}>
    //   {/* <div style={{border: 'solid red'}}>
    //     <h2 style={{padding: '1rem'}}>{post.name}</h2>
    //     <h4>{post.date}</h4>
    //   </div>
    //   <div style={{border: 'solid red'}}>
    //     <img style={{objectFit: 'contain', width: '100%'}} src={post.imageUrl} alt={post.name}/>
    //   </div> */}
    
      <div style={polaroid}>
        <img style={{width: '200px', borderRadius: '16px 16px 0 0' , height: '200px', objectFit: 'cover',  }}src={post.imageUrl} />
        <div style={container}>
          <p>{post.name}</p>
        </div>
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
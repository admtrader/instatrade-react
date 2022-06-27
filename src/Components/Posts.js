import Post from "./Post"


const Posts = ({posts}) => {
  return (
    <div style={{display: "flex", flexDirection: "column", maxWidth: "50%", marginLeft: '25%'}}>
        {posts.map(post => < Post post={post} key={post._id}/>)}

    </div>
  )
}

export default Posts
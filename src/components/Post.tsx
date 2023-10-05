import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const toggleShow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'white' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </Link>
      {isShow && <p style={{ textDecoration: 'bold', color: 'white' }}>more post info...</p>}
      <button onClick={toggleShow} style={{ textDecoration: 'bold', color: 'blue' }}>
        {isShow ? 'Show Less' : 'Show More'}
      </button>
    </div>
  )
}
export default Post

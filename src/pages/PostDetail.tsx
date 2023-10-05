import { useParams } from 'react-router-dom'
import classes from './PostDetail.module.css'
import usePost from '../hooks/usePost'

const PostDetail = () => {
  const { id } = useParams()
  const { post, isLoading, error } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>Posted by userId: {post.userId}</p>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail

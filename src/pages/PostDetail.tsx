import { useParams } from 'react-router-dom'

const PostDetail = () => {
  const { id } = useParams()

  return <h1>PostDetail id : {id}</h1>
}

export default PostDetail

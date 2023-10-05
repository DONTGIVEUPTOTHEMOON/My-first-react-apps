import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'
import Post from '../components/Post'

const Home = () => {
  const { posts, isLoading } = usePosts()

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      <div className="feed-container">
        <h2>Home</h2>
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home

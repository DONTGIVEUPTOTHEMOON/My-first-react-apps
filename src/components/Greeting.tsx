import { useAuth } from '../providers/AuthProvider'
import classes from './Greeting.module.css'

const Greeting = () => {
  const { username } = useAuth()

  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{username}</p>
    </div>
  )
}

export default Greeting

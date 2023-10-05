import classes from './Greeting.module.css'

interface IGreetingProps {
  name: string
  isLoggedIn: boolean
}

const Greeting = ({ name, isLoggedIn }: IGreetingProps) => {
  return (
    <div className={classes.card}>
      <h3>Welcome!</h3>
      <p>{isLoggedIn ? name : 'Unknown'}</p>
    </div>
  )
}

export default Greeting

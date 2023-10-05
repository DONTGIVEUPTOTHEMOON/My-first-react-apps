import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <p>Navbar</p>
      <button className={classes.login}>Login</button>
    </nav>
  )
}
export default Navbar

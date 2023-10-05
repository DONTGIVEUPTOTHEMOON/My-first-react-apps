import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Home
        </NavLink>

        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create account
        </NavLink>
      </div>

      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <button className={classes.login}>Login</button>
      </div>
    </nav>
  )
}
export default Navbar

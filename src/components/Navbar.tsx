import { useAuth } from '../providers/AuthProvider'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  console.log('from navbar:', isLoggedIn)

  return (
    <nav className={classes.navbar}>
      <div className={classes.menu}>
        <p>Navbar</p>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Home
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
        <button className={classes.login}>Login</button>
      </div>
    </nav>
  )
}
export default Navbar

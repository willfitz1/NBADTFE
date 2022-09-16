import { Link } from 'react-router-dom'
import '../Nav/nav.css'

const Nav = ({ user, authenticated, handleLogOut }) => {
  return user && authenticated ? (
    <header>
      <nav>
        <div className="navbar">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/team">Create A Team</Link>
            <Link to="/player">Create A Player</Link>

            <Link to="" onClick={() => handleLogOut()}>
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <div className="navbar">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/signin">Sign In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav

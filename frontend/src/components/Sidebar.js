import { Link } from 'react-router-dom'

const SideBar = ()=>{

    return(
      <div className="sidebar">
        <Link to="/">
          <h1>Buddy</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    )
}

export default SideBar
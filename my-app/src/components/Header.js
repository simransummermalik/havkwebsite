import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/havk-logo.png" alt="HAVK Logo" className="logo" />
          <div className="logo-text">HAVK</div>
        </div>
        <nav className="nav">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/hackathons" className={location.pathname === "/hackathons" ? "active" : ""}>
            Hackathons
          </Link>
          <Link to="/mentors" className={location.pathname === "/mentors" ? "active" : ""}>
            Mentors
          </Link>
          <Link to="/get-involved" className={location.pathname === "/get-involved" ? "active" : ""}>
            Get Involved
          </Link>
          <Link to="/contributors" className={location.pathname === "/contributors" ? "active" : ""}>
            Contributors
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

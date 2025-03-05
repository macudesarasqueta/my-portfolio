import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary style-nav">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img
            src="/images/logo1.png"
            className="logo"
            width={80}
            height={80}
            alt="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav w-100 d-flex justify-content-between links">
            <NavLink to="/About-me" className="nav-link">
              About me
            </NavLink>
            <NavLink to="/My-projects" className="nav-link">
              My projects
            </NavLink>
            <NavLink to="/Skills" className="nav-link">
              Skills
            </NavLink>
            <NavLink to="/CV" className="nav-link">
              CV
            </NavLink>
            <NavLink to="/Contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

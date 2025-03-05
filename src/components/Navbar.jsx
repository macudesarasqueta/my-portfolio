// import '../App.css'
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary style-nav">
      <div className="container-fluid">
        <a href="#profile" className="navbar-brand">
          <img
            src="/images/logo1.png"
            className="logo"
            width={80}
            height={80}
            alt="logo"
          />
        </a>
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
            <a href="#about-me" className="nav-link">
              About Me
            </a>
            <a href="#my-projects" className="nav-link">
              My Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#cv" className="nav-link">
              CV
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

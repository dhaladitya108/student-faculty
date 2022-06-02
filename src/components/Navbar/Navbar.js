import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Student
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Browse Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Browse Student
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login/student">
                Student Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login/faculty">
                Faculty Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

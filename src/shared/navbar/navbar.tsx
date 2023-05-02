import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const Navbar = () => {
  const user = null;

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
        <Link className="navbar-brand fw- logo-text" to={"/"}>
          <FontAwesomeIcon icon={faPlaceOfWorship} className="icon-logo purple pe-2" />
          Haim
        </Link>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link nav-font pe-lg-2" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-font px-lg-4" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-font px-lg-4" href="/">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-font px-lg-4" href="/">
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-font px-lg-4" href="/">
                Dashboard
              </a>
            </li>

            {user && user.email ? (
              <li className="nav-item">
                <a className="nav-link nav-font ps-lg-2" href="/">
                  Logout
                </a>
              </li>
            ) : (
              <li className="auth-link-item">
                <Link className="nav-link nav-font ps-lg-2 p-0" to={"/login"}>
                  Login
                  <FontAwesomeIcon icon={faCircleUser} className="icon-logo ps-3" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

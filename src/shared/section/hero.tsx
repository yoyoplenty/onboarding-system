import { Link } from "react-router-dom";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero">
        <div className="hero-item">
          <div className="hero-text">
            <h1 className="fw-bolder text-secondary">Manage Your School With Us...</h1>
            <p className="fs-5 fw-semibold">Use flexible, innovative, and easy-to-use technology to power your school or district operations.</p>

            <div className="p-2">
              <button className="btn btn-lg bg-purple fw-bold px-3 px-lg-5">
                <Link className="nav-link text-light" to={"/register"}>
                  Enroll
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-item">
          <img src={"https://assets.maccarianagency.com/screenshots/dashboard.png"} alt="metrics" className="rounded-3 hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

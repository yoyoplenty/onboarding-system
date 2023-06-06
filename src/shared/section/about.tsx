import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { getAsset } from "../../utils/helper";
import "./about.css";

const About = () => {
  return (
    <div className="container-fluid p-3">
      <div className="row px-lg-5">
        <Fade left>
          <div className="col-md-6 d-flex align-items-center">
            <img src={getAsset("about.svg")} className="w-100" alt="avatar" />
          </div>
        </Fade>

        <Fade right>
          <div className="col-md-6  py-3">
            <h3 className="fw-bold text-secondary">ABOUT US</h3>
            <h1 className="about-header">
              HOW WE CAN HELP YOUR <span className="purple">SCHOOL'S</span> GOAL
            </h1>

            <p className="about-text">
              Choosing a suitable management system for your school isn’t hard if you know what to look for. A solid bundled contact form plugin
              enables customers to make contact with you, and a means of displaying your business and location information prominently is also
              essential.
            </p>

            <button className="btn bg-purple fw-bold px-4 p-3 rounded-pill">
              <Link className="nav-link text-light" to={"/"}>
                LEARN MORE
              </Link>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;

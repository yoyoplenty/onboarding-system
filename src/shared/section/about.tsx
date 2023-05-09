import { Link } from "react-router-dom";
import "./about.css";
import { getAsset } from "../../utils/helper";

const About = () => {
  return (
    <div className="container-fluid p-3">
      <div className="row px-lg-5">
        <div className="col-md-6 d-flex align-items-center">
          <img src={getAsset("about.svg")} className="w-100" alt="avatar" />
        </div>

        <div className="col-md-6 p-lg-5 py-3">
          <h3 className="fw-bold text-secondary">ABOUT US</h3>
          <h1 className="about-header">
            HOW WE CAN HELP YOUR <span className="purple">BUSINESS</span> GOAL
          </h1>

          <p className="about-text">
            Choosing a suitable theme for your business isn’t hard if you know what to look for. A solid bundled contact form plugin enables customers
            to make contact with you, and a means of displaying your business and location information prominently is also essential.
          </p>

          <button className="btn bg-purple fw-bold px-4 p-3 rounded-pill">
            <Link className="nav-link text-light" to={"/"}>
              LEARN MORE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

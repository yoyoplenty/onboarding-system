import { Navbar } from "../partials";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      This is Basically the Home Page
      <Link to={"login"}>Login Here</Link>
    </div>
  );
};

export default Home;

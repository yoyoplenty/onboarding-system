import { Navbar } from "../partials";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../utils/services/auth";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, []);

  return (
    <div>
      <Navbar />
      This is Basically the Home Page
      <Link to={"login"}>Login Here</Link>
    </div>
  );
};

export default Home;

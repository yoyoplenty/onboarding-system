import { Navbar } from "../partials";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { appStore } from "../store";

const Home = () => {
  const store = appStore();
  const user = store.authUser;

  const navigate = useNavigate();

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

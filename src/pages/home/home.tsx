import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { About, Hero, Navbar, Reason, Service } from "../../shared";
import { appStore } from "../../store";

const Home = () => {
  const store = appStore();
  const user = store.authUser;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [navigate, user]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Reason />
      <About />
      <Service />
    </div>
  );
};

export default Home;

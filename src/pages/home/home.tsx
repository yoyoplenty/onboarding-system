import { About, Hero, Navbar } from "../../shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
      <About />
    </div>
  );
};

export default Home;

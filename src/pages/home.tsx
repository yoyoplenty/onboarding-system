import { Navbar } from "../partials";
import { Link } from "react-router-dom";

const Home = () => {
  // const [posts, setPosts] = useState<any>(null);

  // const getPosts = async () => {
  //   const posts = await getData("posts");
  //   setPosts(posts);
  // };

  // useEffect(() => {
  //   getPosts();
  // }, [posts]);

  return (
    <div>
      <Navbar />
      This is Basically the Home Page
      <Link to={"login"}>Login Here</Link>
    </div>
  );
};

export default Home;

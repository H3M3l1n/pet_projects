import ChatBackground from "../components/ChatBackground/ChatBackground";
import ChatWrapper from "../components/ChatWrapper/ChatWrapper";
import "./home.sass";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <ChatBackground />
        <ChatWrapper />
      </div>
    </div>
  );
};

export default Home;

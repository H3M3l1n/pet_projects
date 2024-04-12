import Chat from "../components/Chat/Chat";
import ChatBackground from "../components/ChatBackground/ChatBackground";
import NameBar from "../components/NameBar/NameBar";
import "./home.sass";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <ChatBackground />
        <Chat />
        <NameBar />
      </div>
    </div>
  );
};

export default Home;

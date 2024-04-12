import Chat from "../Chat/Chat";
import NameBar from "../NameBar/NameBar";
import "./chatwrapper.sass";

const ChatWrapper = () => {
  return (
    <div className="chat_wrapper">
      <Chat />
      <NameBar />
    </div>
  );
};

export default ChatWrapper;

import ChatInput from "../ChatInput/ChatInput";
import Messages from "../Messages/Messages";
import "./chat.sass";

const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <ChatInput />
    </div>
  );
};

export default Chat;

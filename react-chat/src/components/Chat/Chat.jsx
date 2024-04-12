import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./chat.sass";

const Chat = () => {
  return (
    <div className="chat">
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;

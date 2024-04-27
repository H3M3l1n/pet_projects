import { useContext } from "react";
import { HomeContext } from "../../pages/Home";
import Message from "../Message/Message";
import "./messages.sass";

const Messages = () => {
  const { messages } = useContext(HomeContext);

  return (
    <div className="messages">
      {messages.map((message) => (
        <Message message={message} key={message.id}></Message>
      ))}
    </div>
  );
};

export default Messages;

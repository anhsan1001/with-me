import { useEffect } from "react";
import Chat from "../../../components/Chat";
import MessageList from "../../../components/MessageList";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   return navigate("/messages/1");
  // }, []);
  return (
    <div className="grid grid-cols-3 ">
      <div className="col-span-1">
        <MessageList />
      </div>
      <div className="col-span-2">
        <Chat />
      </div>
    </div>
  );
};

export default Messages;

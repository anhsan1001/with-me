import { useEffect } from "react";

import MessageList from "../../../components/MessageList";
import { Outlet, useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   return navigate("/messages/1");
  // }, []);
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-1">
        <MessageList />
      </div>
      <div className="col-span-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Messages;

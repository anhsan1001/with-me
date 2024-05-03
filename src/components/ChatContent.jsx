import { useContext } from "react";
import ChatPhoto from "./ChatPhoto";
import EveryOneChat from "./EveryOneChat";
import YourChat from "./YourChat";
import { AppContext } from "../Context/AppContext";

const ChatContent = (props) => {
  const { data } = props;
  const newData = Object.entries(data);
  const { user } = useContext(AppContext);

  const handleInforChat = (chat) => {
    if (user.uid === chat[1].uid) {
      return (
        <YourChat
          photoURL={chat[1]?.photoURL}
          isFirstChat={true}
          key={chat[0]}
          data={chat[1].message}
        />
      );
    }
    return (
      <EveryOneChat
        photoURL={chat[1]?.photoURL}
        isFirstChat={true}
        key={chat[0]}
        data={chat[1].message}
      />
    );
  };
  return <>{newData?.map((chat) => handleInforChat(chat))}</>;
};

export default ChatContent;

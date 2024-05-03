import { useContext, useEffect, useState } from "react";
import InforChat from "./InforChat";
import { Input } from "@material-tailwind/react";
import { AppContext } from "../Context/AppContext";
import { getDataFirebase, getDataFirebase2 } from "../firebase/services";

const MessageList = () => {
  const { user } = useContext(AppContext);
  const [friends, setFriends] = useState({});
  const [search, setSearch] = useState("");
  const [dataChat, setDataChat] = useState({});
  const [inforMiniChat, setInforMiniChat] = useState({});
  useEffect(() => {
    getDataFirebase(`friends/${user?.uid}`, setFriends);
    getDataFirebase2(`messages/${user?.uid}`, setDataChat);
  }, [user.uid]);

  useEffect(() => {
    setInforMiniChat(friends);
  }, [friends]);

  useEffect(() => {
    let objEmty = {};
    const entriesDataChat = Object.entries(dataChat);
    entriesDataChat.forEach((entry) => {
      const array = Object.entries(entry[1]);
      objEmty = {
        [entry[0]]: {
          ...inforMiniChat[entry[0]],
          chat: array[array.length - 1][1],
        },
      };
    });
    setInforMiniChat({ ...inforMiniChat, ...objEmty });
  }, [dataChat]);
  return (
    <div className="card-post flex flex-col gap-2 px-5">
      <Input
        type="search"
        className="bg-[#202020] outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 20 20">
            <path
              fill="#BEBEBE"
              fillRule="evenodd"
              d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path>
          </svg>
        }
      />
      {Object.entries(inforMiniChat).map((chat) => (
        <InforChat data={chat[1]} key={chat[0]} />
      ))}
    </div>
  );
};

export default MessageList;

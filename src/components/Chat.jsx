import { useContext, useEffect, useState } from "react";
import ChatContent from "./ChatContent";
import { IconButton, Textarea } from "@material-tailwind/react";
import { addMessages, getDataFirebase } from "../firebase/services";
import { AppContext } from "../Context/AppContext";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { user } = useContext(AppContext);
  const [messages, setMessages] = useState("");
  const [dataChat, setDataChat] = useState({});
  const [dataForcusUser, setDataForcusUser] = useState({});

  const { userId } = useParams();
  const handleSendMessage = () => {
    const dataMessage = {
      message: messages,
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
    };

    addMessages(user.uid, userId, dataMessage);
    addMessages(userId, user.uid, dataMessage);
    setMessages("");
  };

  useEffect(() => {
    getDataFirebase(`messages/${user.uid}/${userId}`, setDataChat);
  }, [userId, user.uid]);

  useEffect(() => {
    getDataFirebase(`users/${userId}`, setDataForcusUser);
  }, [userId]);

  return (
    <div className="card-content px-3 sticky top-3 right-0 ">
      <div className="top-chat flex flex-row justify-between items-center">
        <div className="flex-content gap-2">
          <img src={dataForcusUser?.photoURL} alt="" className="avatar-btn" />
          <div className="">
            <div className="">{dataForcusUser?.displayName}</div>

            <div className="flex-content gap-2">
              <div className="h-3 w-3 rounded-full bg-green-600"></div>
              <div className="text-[#BEBEBE] text-xs">Đang hoạt động</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center">
          <button className="">
            <svg
              className="icon-chat"
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
          </button>
          <button>
            <svg
              className="icon-chat"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="#BEBEBE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.206.099-.446.099-.926v-2.817c0-.404 0-.606-.067-.779a.999.999 0 00-.277-.396c-.14-.122-.33-.191-.71-.329l-3.206-1.166c-.441-.16-.662-.24-.872-.227a1 1 0 00-.513.182c-.171.121-.292.322-.534.725L14 16a12.1 12.1 0 01-6-6l1.369-.821c.402-.242.604-.363.725-.534a1 1 0 00.182-.513c.014-.21-.066-.43-.227-.872L8.883 4.053c-.138-.38-.207-.569-.329-.709a1 1 0 00-.396-.278C7.985 3 7.783 3 7.379 3H4.562c-.48 0-.72 0-.926.1a1.06 1.06 0 00-.432.401c-.114.198-.13.416-.162.85C3.014 4.732 3 5.115 3 5.5z"></path>
            </svg>
          </button>
          <button>
            <svg
              className="icon-chat"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="#000"
              data-name="Line Color"
              viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="#BEBEBE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2">
                <path d="M16 14.48l3.63 1.45A1 1 0 0021 15V9a1 1 0 00-1.37-.93L16 9.52z"></path>
                <rect width="13" height="12" x="3" y="6" rx="1"></rect>
              </g>
            </svg>
          </button>
          <button>
            <svg
              className="icon-chat"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24">
              <g>
                <g>
                  <g
                    stroke="#BEBEBE"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2">
                    <path d="M11 18a1 1 0 102 0 1 1 0 00-2 0zM11 12a1 1 0 102 0 1 1 0 00-2 0zM11 6a1 1 0 102 0 1 1 0 00-2 0z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <ChatContent isFirstChat={true} data={dataChat} />

      <div className="flex w-full flex-row items-center  bg-[#202020] gap-2 rounded-[99px] border border-gray-900/10  px-2 py-1 mt-6">
        <div className="flex">
          <IconButton className="rounded-full">
            <svg
              className="icon-chat"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 48 48">
              <path fill="#fff" fillOpacity="0.01" d="M0 0H48V48H0z"></path>
              <path
                stroke="#BEBEBE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M24.707 9.565l-14.85 14.85a9 9 0 000 12.727v0a9 9 0 0012.729 0l17.678-17.678a6 6 0 000-8.485v0a6 6 0 00-8.486 0L14.101 28.657a3 3 0 000 4.243v0a3 3 0 004.242 0l14.85-14.85"></path>
            </svg>
          </IconButton>
          <IconButton className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5">
              <path
                stroke="#BEBEBE"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </IconButton>
          <IconButton className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5">
              <path
                stroke="#BEBEBE"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </IconButton>
        </div>
        <Textarea
          rows={1}
          resize={false}
          placeholder="Aa"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
          className="min-h-full !border-0 focus:border-transparent text-white "
          containerProps={{ className: "grid h-full" }}
          labelProps={{ className: "before:content-none after:content-none" }}
        />
        <div>
          <IconButton
            className="rounded-full"
            disabled={!messages}
            onClick={handleSendMessage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chat;

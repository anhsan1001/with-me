import { useNavigate } from "react-router-dom";

const InforChat = (data) => {
  const { photoURL, displayName, uid, chat } = data.data;
  const navigate = useNavigate();

  const hanldeShowMessage = () => {
    return navigate(`/messages/${uid}`);
  };
  return (
    <div
      className="flex flex-row gap-3 justify-start items-center hover:bg-[#202020] py-2 rounded-2xl my-2"
      onClick={hanldeShowMessage}>
      <img src={photoURL} alt="" className="avatar-btn" />
      <div className="">
        <div className="name">{displayName}</div>
        <div className="chat text-gray-600">{chat?.message}</div>
      </div>
      <div className="time-chat">14p</div>
    </div>
  );
};

export default InforChat;

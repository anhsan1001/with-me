import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const MessageList = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="card-post flex flex-col gap-2 px-5">
      <input type="search" name="" id="" />
      <div className="flex flex-row  justify-around items-center hover:bg-[#202020] py-2 rounded-2xl my-2">
        <img src={user.photoURL} alt="" className="rounded-full h-10 w-10" />
        <div className="">
          <div className="name">Anh San</div>
          <div className="chat">Lorem ipsum, dolor sit amet...</div>
        </div>
        <div className="time-chat">14p</div>
      </div>
    </div>
  );
};

export default MessageList;

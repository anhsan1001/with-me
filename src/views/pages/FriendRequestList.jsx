import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import InforAddUser from "../../components/InforAddUser";

const FriendRequestList = () => {
  const { friendRequest } = useContext(AppContext);
  return (
    <div className="card-content">
      <div className="px-5">
        <div className="text-white">Lời mời kết bạn</div>
        <div className="">
          {friendRequest &&
            Object.entries(friendRequest).map((friend) => (
              <InforAddUser data={friend[1]} key={friend[1].uid} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FriendRequestList;

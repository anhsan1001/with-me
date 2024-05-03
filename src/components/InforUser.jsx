import { useContext } from "react";
import { sendFriendRequest } from "../firebase/services";
import { AppContext } from "../Context/AppContext";

const InforUser = (data) => {
  const { photoURL, displayName, uid } = data.data;
  const { user } = useContext(AppContext);
  const handleAddUser = () => {
    const datafriend = {
      uid: user?.uid,
      displayName: user?.displayName,
      photoURL: user?.photoURL,
    };
    sendFriendRequest(uid, datafriend);
  };
  return (
    <div className="flex flex-row  justify-start gap-4 items-center cursor-pointer py-2  my-2 text-white mx-10">
      <img src={photoURL} alt="" className="avatar-btn" />
      <div className="">
        <div className="name">{displayName}</div>
      </div>
      <button onClick={handleAddUser}>
        <svg
          className="icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="800"
          fill="none"
          viewBox="0 0 24 24">
          <path
            fill="#fff"
            d="M11 8a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H8a1 1 0 110-2h3V8z"></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3.007 12a8.993 8.993 0 1017.986 0 8.993 8.993 0 00-17.986 0z"
            clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};

export default InforUser;

import { useContext } from "react";
import { addFriend } from "../firebase/services";
import { AppContext } from "../Context/AppContext";
import { Button } from "@material-tailwind/react";

const InforAddUser = ({ data }) => {
  const { photoURL, displayName, uid } = data;
  const { user } = useContext(AppContext);
  const handleAddUser = () => {
    const datafriend = {
      uid,
      displayName,
      photoURL,
    };
    addFriend(user?.uid, datafriend);
  };
  return (
    <div className="grid grid-cols-2 gap-3 hover:bg-[#202020] py-2 px-3 rounded-2xl my-2 text-white w-fit ">
      <div className="col-span-1 flex flex-row items-center justify-start gap-3 ">
        <img src={photoURL} alt="" className="avatar-btn" />
        <div className="">
          <div className="name">{displayName}</div>
        </div>
      </div>
      <div className="flex flex-row gap-3 col-span-1">
        <Button size="sm" onClick={handleAddUser} color="blue">
          Xác nhận
        </Button>
        <Button
          size="sm"
          onClick={handleAddUser}
          color="red"
          variant="outlined">
          Xóa
        </Button>
      </div>
    </div>
  );
};

export default InforAddUser;

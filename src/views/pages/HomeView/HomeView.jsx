import { Outlet, useNavigate } from "react-router-dom";
import Menu from "../../../components/Menu";
import { auth } from "../../../firebase/config";
import { useEffect } from "react";
import ListFriend from "../../../components/ListFriend";

const HomeView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return navigate("/login");
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1 ">
        <Menu />
      </div>
      <div className="col-span-2">
        <Outlet />
      </div>
      <div className="col-span-1 ">
        <ListFriend />
      </div>
    </div>
  );
};

export default HomeView;

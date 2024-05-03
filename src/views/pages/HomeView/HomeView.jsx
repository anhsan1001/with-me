import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { useEffect, useState } from "react";
import HotTrend from "../../../components/HotTrend";
import { addUserIntoDatabase } from "../../../firebase/services";
import Siderbar from "../../../components/Sidebar";

const HomeView = () => {
  const navigate = useNavigate();
  const pathName = location.pathname;
  const [className, setClassName] = useState("col-span-2");
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userInfor = {
          displayName: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL,
        };
        addUserIntoDatabase(userInfor);
      } else {
        return navigate("/login");
      }
    });
  }, []);

  useEffect(() => {
    if (pathName.includes("messages")) {
      setClassName("col-span-3");
      setIsShow(false);
      return;
    }
    setClassName("col-span-2");
    setIsShow(true);
  }, [pathName]);
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-1 ">
        <Siderbar />
      </div>
      <div className={className}>
        <Outlet />
      </div>

      {isShow && (
        <div className="col-span-1 ">
          <HotTrend />
        </div>
      )}
    </div>
  );
};

export default HomeView;

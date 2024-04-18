import { Link, Outlet } from "react-router-dom";
import HomeContent from "../../../components/HomeContent";
import Menu from "../../../components/Menu";

const HomeView = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1">
        {" "}
        <Menu />
      </div>
      <div className="col-span-3">
        {" "}
        {/* <HomeContent /> */}
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeView;

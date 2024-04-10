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
        <HomeContent />
      </div>
    </div>
  );
};

export default HomeView;

import { createBrowserRouter } from "react-router-dom";
import Login from "../views/pages/Login";
import HomeView from "../views/pages/HomeView/HomeView";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomeView />,
  },
]);
console.log(router);
{
  router;
}

import { createBrowserRouter } from "react-router-dom";
import Login from "../views/pages/Login";
import HomeView from "../views/pages/HomeView/HomeView";
import ErrorPage from "../views/pages/ErrorPage";
import Contact from "../components/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
    errorElement: <ErrorPage />,
    loader: true,
    children: [{ path: "contacts/:contactId", element: <Contact /> }],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export { router };

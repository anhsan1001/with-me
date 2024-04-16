import "./App.css";
import HomeView from "./views/pages/HomeView/HomeView";
import Login from "./views/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
  return <RouterProvider router={router} />;
}

export default App;

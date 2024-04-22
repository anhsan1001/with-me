import "./App.css";
import ErrorPage from "./views/pages/ErrorPage";
import HomeView from "./views/pages/HomeView/HomeView";
import Login from "./views/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Music from "./views/pages/Music";
import Messages from "./views/pages/Messages";
import HomeContent from "./components/HomeContent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/messages", element: <Messages /> },
        { path: "/music", element: <Music /> },
        { path: "/", element: <HomeContent /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

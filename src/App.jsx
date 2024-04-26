import "./App.css";
import ErrorPage from "./views/pages/ErrorPage";
import HomeView from "./views/pages/HomeView/HomeView";
import Login from "./views/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Music from "./views/pages/Music";
import Messages from "./views/pages/Messages";
import HomeContent from "./components/HomeContent";
import AppProvider from "../Context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "messages/:idUser",
          element: <Messages />,
        },
        { path: "/music", element: <Music /> },
        { path: "/", element: <HomeContent /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <AppProvider>
      <RouterProvider router={router} />;
    </AppProvider>
  );
}

export default App;

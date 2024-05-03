import "./App.css";
import ErrorPage from "./views/pages/ErrorPage";
import HomeView from "./views/pages/HomeView/HomeView";
import Login from "./views/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Music from "./views/pages/Music";
import Messages from "./views/pages/Messages";
import HomeContent from "./components/HomeContent";
import AppProvider from "./Context/AppContext";
import Chat from "./components/Chat";
import SearchPage from "./views/pages/SearchPage";
import FriendRequestList from "./views/pages/FriendRequestList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/messages",
          element: <Messages />,
          children: [
            {
              path: "/messages/:userId",
              element: <Chat />,
            },
          ],
        },
        { path: "/music", element: <Music /> },
        { path: "/", element: <HomeContent /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/friend-request-list", element: <FriendRequestList /> },
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

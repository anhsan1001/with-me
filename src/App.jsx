import "./App.css";
import Contact from "./components/Contact";
import ErrorPage from "./views/pages/ErrorPage";
import HomeView from "./views/pages/HomeView/HomeView";
import Login from "./views/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
      errorElement: <ErrorPage />,
      children: [{ path: "contacts/:contactId", element: <Contact /> }],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

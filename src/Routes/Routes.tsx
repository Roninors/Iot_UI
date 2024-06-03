import App from "@/App";
import Admin from "@/Pages/Admin";
import Authentication from "@/Pages/Authentication";
import Dashboard from "@/Pages/Dashboard";
import MainPage from "@/Pages/MainPage";
import Requests from "@/Pages/Requests";
import Subscribers from "@/Pages/Subscribers";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
    children: [],
  },
  {
    path: "/main",
    element: <MainPage />,
    children: [{ path: "", element: <Dashboard /> }],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "requests", element: <Requests /> },
      { path: "", element: <Subscribers /> },
    ],
  },
]);

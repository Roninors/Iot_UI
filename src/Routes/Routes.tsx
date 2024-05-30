import App from "@/App";
import Dashboard from "@/Pages/Dashboard";
import MainPage from "@/Pages/MainPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },

  {
    path: "/main",
    element: <MainPage />,
    children: [{ path: "", element: <Dashboard /> }],
  },
]);

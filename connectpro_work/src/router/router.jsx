import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Network from "../pages/Mynetwork";
import Profile from "../pages/Profile";
import Notifications from "../pages/Notifications";
import Logout from "../pages/Logout";
import Signup from "../pages/Signup";
import Settings from "../pages/Settings";
import Layout from "../layouts/Layout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [

      {

        path: "/",
        element: <ProtectedRoute><Home /></ProtectedRoute>,
      },
      {
        path: "/MyNetwork",
        element: <ProtectedRoute><Network /></ProtectedRoute>,
      },
      {
        path: "/Profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
      },
      {
        path: "/Notifications",
        element: <ProtectedRoute><Notifications /></ProtectedRoute>,
      },
      {
        path: "/Settings",
        element: <ProtectedRoute><Settings /></ProtectedRoute>
      },
    ],
  },

  {
    path: "/Signup",
    element: <Signup />

  },
  {
    path: "/logout",
    element: <Logout />
  },



]);

export default function Routes() {
  return <RouterProvider router={router} />;
}















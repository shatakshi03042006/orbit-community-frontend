import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({children}) {
  const authData = localStorage.getItem("authData");

  return authData ? children : <Navigate to="/logout" />;
}
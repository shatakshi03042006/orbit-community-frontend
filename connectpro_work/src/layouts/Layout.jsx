import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Rightmenu from "../components/Rightmenu";
import Leftmenu from "../components/Leftmenu";

export default function Layout() {
  const location = useLocation();
  return <div className="app-shell">
    <Navbar />
    <div className={`app-grid ${location.pathname === "/" ? "feed-grid" : "page-grid"}`}>
      <aside className="left-rail"><Leftmenu /></aside>
      <main className="main-content"><Outlet /></main>
      {location.pathname === "/" && <aside className="right-rail"><Rightmenu /></aside>}
    </div>
    <ToastContainer theme="dark" position="bottom-right" />
  </div>;
}

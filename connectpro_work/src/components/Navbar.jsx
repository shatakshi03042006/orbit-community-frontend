import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Feed", icon: "⌂" },
  { to: "/MyNetwork", label: "Network", icon: "♧" },
  { to: "/Notifications", label: "Activity", icon: "◉" },
];

export default function Navbar() {
  return (
    <header className="app-header">
      <div className="header-inner">
        <Link to="/" className="brand-mark" aria-label="ConnectPro home">
          <span className="brand-symbol">c<span>+</span></span>
          <span className="brand-name">connect<span>pro</span><small>YOUR PROFESSIONAL CIRCLE</small></span>
        </Link>
        <div className="header-search"><span>⌕</span><input aria-label="Search" placeholder="Search people, ideas, and communities" /></div>
        <nav className="header-nav" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === "/"} className={({isActive}) => `header-nav-item ${isActive ? "active" : ""}`}><span>{item.icon}</span><small>{item.label}</small></NavLink>)}
        </nav>
        <Link className="header-avatar" to="/Profile" aria-label="Open profile"><img src="https://i.pravatar.cc/100?img=12" alt="Your profile" /></Link>
      </div>
    </header>
  );
}

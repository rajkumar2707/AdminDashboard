/* eslint-disable react/prop-types */
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function Header({ OpenSidebar }) {
  const location = useLocation();
  const { pathname } = location;
  const title =
    pathname === "/"
      ? "Dashboard"
      : pathname === "/shipments"
      ? "Shipments"
      : pathname === "/orders"
      ? "Orders"
      : pathname === "/clients"
      ? "Clients"
      : pathname === "/warehousing"
      ? "Warehousing"
      : pathname === "/report"
      ? "Reports & analytics"
      : pathname === "/payments"
      ? "Billing & payments"
      : pathname === "/security"
      ? "Security"
      : "";

  return (
    <header className="header">
      <div className="menu-icon">
        <FiMenu className="icon" onClick={OpenSidebar} />
      </div>
      <span className="header-title">{title}</span>
    </header>
  );
}

export default Header;

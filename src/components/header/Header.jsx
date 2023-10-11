/* eslint-disable react/prop-types */
import "./Header.css";
import { FiMenu } from "react-icons/fi";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <FiMenu className="icon" onClick={OpenSidebar} />
      </div>
      <span className="header-title">Dashboard</span>
    </header>
  );
}

export default Header;

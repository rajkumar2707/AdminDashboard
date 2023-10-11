/* eslint-disable react/prop-types */
import "./Sidebar.css";
import {
  BiSolidDashboard,
  BiSolidShip,
  BiBorderBottom,
  BiUser,
  BiBarChartSquare,
} from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa";
import { MdPayment, MdSecurity } from "react-icons/md";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BiSolidDashboard className="icon_header" />
          Shiptrack
        </div>
        <span className="icon_header close-icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BiSolidDashboard className="icon" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiSolidShip className="icon" />
            Shipments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiBorderBottom className="icon" />
            Orders
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiUser className="icon" />
            Clients
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaWarehouse className="icon" />
            Warehousing
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BiBarChartSquare className="icon" />
            Reports & analytics
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdPayment className="icon" />
            Billing & payments
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdSecurity className="icon" />
            Security
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

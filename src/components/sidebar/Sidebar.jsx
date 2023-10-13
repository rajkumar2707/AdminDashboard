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
import { NavLink } from "react-router-dom";

const SidebarData = [
  {
    id: 0,
    title: "Dashboard",
    link: "/",
    icon: <BiSolidDashboard className="icon" />,
  },
  {
    id: 1,
    title: "Shipments",
    link: "/shipments",
    icon: <BiSolidShip className="icon" />,
  },
  {
    id: 2,
    title: "Orders",
    link: "/orders",
    icon: <BiBorderBottom className="icon" />,
  },
  {
    id: 3,
    title: "Clients",
    link: "/clients",
    icon: <BiUser className="icon" />,
  },
  {
    id: 4,
    title: "Warehousing",
    link: "/warehousing",
    icon: <FaWarehouse className="icon" />,
  },
  {
    id: 5,
    title: "Reports & analytics",
    link: "/report",
    icon: <BiBarChartSquare className="icon" />,
  },
  {
    id: 6,
    title: "Billing & payments",
    link: "/payments",
    icon: <MdPayment className="icon" />,
  },
  {
    id: 7,
    title: "Security",
    link: "/security",
    icon: <MdSecurity className="icon" />,
  },
];

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="main">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <BiSolidDashboard className="icon_header" />
            Shiptrack
          </div>
          <span className="icon_header close-icon" onClick={OpenSidebar}>
            X
          </span>
        </div>
        {SidebarData.map((item) => (
          <NavLink to={item.link} key={item.id} className="sidebar-list-item">
            <div>{item.icon}</div>
            {item.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;

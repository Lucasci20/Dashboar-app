import { useState } from "react";

import { IoMenuOutline } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { BsChevronLeft } from "react-icons/bs";

import "./sidebar.scss";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const ShowSidebar = () => setSidebar(!sidebar);

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <button className="menu-bars" onClick={ShowSidebar}>
          <i>
            <IoMenuOutline />
          </i>
        </button>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li>
            <a className="control-panel" href="/">
              <i>
                <MdInsertChartOutlined />
              </i>
              <span>Painel de controle</span>
            </a>
          </li>
          <div className="navbar-toggle">
            <i onClick={ShowSidebar}>
              <BsChevronLeft />
            </i>
          </div>
        </ul>
      </nav>
    </div>
  );
}

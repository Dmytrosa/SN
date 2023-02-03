import React from "react";
import { NavLink } from "react-router-dom";
import q from "./SideBar.module.css";

const SideBar = () => {
  return (
    <nav className="bar">
      <div className={q.sign}>
        <div className={q.Pro}>
          <NavLink
            to="/Profile"
            className={(navData) => (navData.isActive ? q.active : q.sign)}
          >
            <div className={q.center}>Profile</div>
          </NavLink>
        </div>
        <div className={q.Cha}>
          <NavLink
            to="/Chats"
            className={(navData) => (navData.isActive ? q.active : q.sign)}
          >
            <div className={q.center}>Chats</div>
          </NavLink>
        </div>
        <div className={q.NewB}>
          <NavLink
            to="/NewBoys"
            className={(navData) => (navData.isActive ? q.active : q.sign)}
          >
            <div className={q.center}>New Boys</div>
          </NavLink>
        </div>

        <div className={q.Set}>
          <NavLink
            to="/Settings"
            className={(navData) => (navData.isActive ? q.active : q.sign)}
          >
            <div className={q.center}>Settings</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;

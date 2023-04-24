import React from "react";
import { NavLink } from "react-router-dom";
import q from "./SideBar.module.css";
import "../Assets/Loader copy.css"

const SideBar = () => {
  return (
    <nav className="bar">
      <div className="gridcontainer">
          <NavLink
            to="/Profile"
            className ={(navData)=>(navData.isActive ? q.activegriditem1 : q.griditemsquare1)}
          >
            Profile
          </NavLink>
          <NavLink
            to="/Chats"
            className ={(navData)=>(navData.isActive ? q.activegriditem2 : q.griditemsquare2)}
          >
           Chats
          </NavLink>
          <NavLink
            to="/Users"
            className ={(navData)=>(navData.isActive ? q.activegriditem3 : q.griditemsquare3)}
          >
            <div className={q.center}>New Boys</div>
          </NavLink>
          <NavLink
            to="/Settings"
            className ={(navData)=>(navData.isActive ? q.activegriditem4 : q.griditemsquare4)}
          >
            <div className={q.center}>Settings</div>
          </NavLink>
      </div>
    </nav>
  );
};
export default SideBar;

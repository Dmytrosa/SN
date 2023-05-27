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
            className ={(navData)=>(navData.isActive ? q.btn : q.btn)}
          >
            Profile
          </NavLink>
          <NavLink
            to="/Chats"
            className ={(navData)=>(navData.isActive ? q.btn : q.btn)}
          >
           Chat
          </NavLink>
          <NavLink
            to="/Users"
            className ={(navData)=>(navData.isActive ? q.btn : q.btn)}
          >
            <div className={q.center}>New Boys</div>
          </NavLink>
          <NavLink
            to="/Settings"
            className ={(navData)=>(navData.isActive ? q.btn : q.btn)}
          >
            <div className={q.center}>Settings</div>
          </NavLink>
          {/* <textarea typeof="input" rows="3" cols="5" placeholder="Aboba" > </textarea> */}

      </div>
    </nav>
  );
};
export default SideBar;

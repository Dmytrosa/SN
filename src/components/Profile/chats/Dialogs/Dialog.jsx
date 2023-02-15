import React from "react";
import q from "./../Chats.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  debugger
  return (
    <div>
      <NavLink
        to={"/Сhats/" + props.id}
        className={(navData) => (navData.isActive ? q.active : q.Bars)}
        >
        <div className={q.center}>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default Dialog;

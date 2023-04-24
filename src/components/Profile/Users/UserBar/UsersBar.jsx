
import React from "react";
import q from "./../Users.module.css";
import userPhoto from "../../../../additions/UsersAva.png";
import Reloader from "../../../Assets/Loader";
import UsersList from "./UsersList"
import { NavLink } from "react-router-dom";
import Paginator from "../../../Assets/Paginator";

const UsersBar = (props) => {
  return (
    <div>

      {props.isFetching ? <Reloader /> : <>
        <Paginator
          pageSize={props.pageSize}
          totalUsersCount={props.totalUsersCount}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
          pagePortion={props.pagePortion} />
        <UsersList {...props}/>
      </>}
    </div>
  )
}
export default UsersBar



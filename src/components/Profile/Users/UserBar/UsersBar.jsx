import React from "react";
import Reloader from "../../../Assets/Loader";
import UsersList from "./UsersList"
import Paginator from "../../../Assets/Paginator";

const UsersBar = (props) => {
  return (
    <>
      {props.isFetching ? <Reloader /> : <>
        <Paginator
          pageSize={props.pageSize}
          totalUsersCount={props.totalUsersCount}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
          pagePortion={props.pagePortion} />
        <UsersList {...props}/>
      </>}
    </>
  )
}
export default UsersBar



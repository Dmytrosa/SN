
import React from "react";
import q from "./../Users.module.css";
import userPhoto from "../../../../additions/UsersAva.png";
import Reloader from "../../../Assets/Loader"
import { NavLink } from "react-router-dom";

const UsersBar=(props)=>{
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  pagesCount= 70;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
return(
  <div>

    {props.isFetching? <Reloader/> :<>
    <div>
        {pages.map(p =>  { return  <span key={p} className={props.currentPage === p && q.selectedPage}
            onClick={ () =>  {props.onPageChanged(p) } } > _{p}_</span>
        })}
      </div>
      {props.usersinfo.map(u =>  <div key={u.id}>
        <span>
          <div>
          <NavLink
            to={'./../Profile/'+u.id}>
            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="aboba" />
            </NavLink> 
          </div>
          <div>
            {u.followed ?
              <button 
                disabled={props.isFetchingFollowing.some(id => id === u.id)} 
              onClick={() => {props.UnFollowThunk(u.id)}}>unfollow</button>
              : <button
               disabled={props.isFetchingFollowing.some(id => id === u.id)}
               onClick={() => {props.FollowThunk(u.id)}}>follow</button>}
          </div>
          <div>{u.name}</div>
        </span>
      </div>)}</>}
      
    </div>
)
}
 export default UsersBar



import React from "react";
import q from "./../Users.module.css";
import userPhoto from "../../../../additions/UsersAva.png";
import { NavLink } from "react-router-dom";

const UsersList=(props)=>{
return(
  <div>
      {props.usersinfo.map(u =><div key={u.id}>
        <span>
          <div>
          <NavLink
            to={'./../Profile/'+u.id}>
            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="monkey" />
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
      </div>)}
    </div>
)
}
 export default UsersList



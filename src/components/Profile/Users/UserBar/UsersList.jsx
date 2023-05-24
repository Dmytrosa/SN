import React from "react";
import q from "./../Users.module.css";
import p from "../../../Profile/Posts/Post/Post.module.css"
import k from "../../../Assets/Form.module.css"
import bb from "../../../Assets/Blackbutton.module.css"
import userPhoto from "../../../../additions/UsersAva.png";
import { NavLink } from "react-router-dom";

const UsersList=(props)=>{
return(
  <div className={q.userslist}>

    
      {props.usersinfo.map(u =><div className={q.container} key={u.id}>

        <div className={q.box}>
          <span className={q.title}> {u.name}</span>


<div>
          <div >
          <NavLink
            to={'./../Profile/'+u.id}>
            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="monkey" />
            </NavLink> 
          </div>
          <div>
            {u.followed ?
              <button className={p.delete} 
                disabled={props.isFetchingFollowing.some(id => id === u.id)} 
              onClick={() => {props.UnFollowThunk(u.id)}}>unfollow</button>
              : <button className={bb.Bbutton}
               disabled={props.isFetchingFollowing.some(id => id === u.id)}
               onClick={() => {props.FollowThunk(u.id)}}>follow</button>}
          </div>
          </div>
        </div>
      </div>)}
    </div>
)
}
 export default UsersList



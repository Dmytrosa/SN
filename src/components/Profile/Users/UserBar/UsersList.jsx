import React from "react";
import q from "./../Users.module.css";
import p from "../../../Profile/Posts/Post/Post.module.css"
import k from "../../../Assets/Form.module.css"
import userPhoto from "../../../../additions/UsersAva.png";
import { NavLink } from "react-router-dom";

const UsersList=(props)=>{
return(
  <div className={q.userslist}>
      {props.usersinfo.map(u =><div className={q.userBlock} key={u.id}>
        <span>
          <div className={q.avaBlock}>
          <NavLink
            to={'./../Profile/'+u.id}>
            <img  src={u.photos.small != null ? u.photos.small : userPhoto} className={q.Ava} alt="monkey" />
            </NavLink> 
          </div>
          <div className={q.userName}>{u.name}</div>
          <div>
            {u.followed ?
              <button className={p.delete} 
                disabled={props.isFetchingFollowing.some(id => id === u.id)} 
              onClick={() => {props.UnFollowThunk(u.id)}}>unfollow</button>
              : <button className={k.button}
               disabled={props.isFetchingFollowing.some(id => id === u.id)}
               onClick={() => {props.FollowThunk(u.id)}}>follow</button>}
          </div>
        </span>
      </div>)}

      <div className={q.container}>
    <div className={q.box}>
        <span className={q.title}>GLASS EFFECT</span>
        <div>
            <strong>JOE WATSON SBF</strong>
            <p>0000 000 000 0000</p>
            <span>VALID</span> <span>01/28</span>
        </div>
    </div>
</div>
    </div>
)
}
 export default UsersList



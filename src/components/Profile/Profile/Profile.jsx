import React from "react";
import q from "./Profile.module.css";
import Posts from "../Posts/Posts";
import Status from "./Status";
import Loader from "../../Assets/Loader";
import { Form } from "./AddPostForm"
import backgr from "../../../additions/backgr.jpg"
import monkey from "../../../additions/UsersAva.png"
import AvaLoader from "./AvaLoader";


const Profile = (props) => {


  if (!props.profile) {
    return (<Loader />)
  }
  return (

    <div className={q.Content} >
      <div>
        <img
          className={q.bgp} 
          src={backgr}
        />
      </div>
      <div className={q.info}>
        <span className={q.UserName}>{props.profile.fullName}</span>
        <div> <img src={props.profile.photos.large? props.profile.photos.large :  monkey } className = {q.ava}></img></div>
          {!props.state.auth.userId === props.profile.userId
 ?
            <></> :
             <AvaLoader SetAvaThunk={props.SetAvaThunk}/>}
        <div>
          <Status {...props} 
          // isAuthor={isAuthor}
           />
        </div>
      </div>
      {!props.state.auth.userId === props.profile.userId
 ?
            <></> :
              <><div className={q.WordPosts}>POSTS</div>
              <Form AddPost={props.AddPost} />
              <Posts postsinfo={ props.postsinfo} deletePost={props.DeletePost} /></>}
    </div>

  );

}
export default
  // React.memo(
  Profile
  //   , (props, nextProps) => {
  //   return props !== nextProps
  // },);


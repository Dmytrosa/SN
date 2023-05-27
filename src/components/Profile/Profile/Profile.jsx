import React from "react";
import q from "./Profile.module.css";
import bb from "../../Assets/Blackbutton.module.css"
import Posts from "../Posts/Posts";
import Status from "./Status";
import Loader from "../../Assets/Loader";
import { Form } from "./AddPostForm"
import backgr from "../../../additions/backgr.jpg"
import monkey from "../../../additions/UsersAva.png"
import AvaLoader from "./AvaLoader";
import { ContactsInfo } from "./ContactsForm";
import { useState } from "react";
import { PersonalInfo } from "./PersonalInfoForm copy";

const Profile = (props) => {
const [isPersonalInfoActive, setIsPersonalInfoActive] = useState(false)
const [isContactsActive, setIsContactsActive] = useState(false)
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
        <div className={q.UserName}>{props.profile.fullName}</div>
        <div className={q.userInfo}>
          <img src={props.profile.photos.large ? props.profile.photos.large : monkey} className={q.ava}></img>
         
         {isPersonalInfoActive
              ? 
          <PersonalInfo {...props} setIsPersonalInfoActive={setIsPersonalInfoActive}/>
              :
          <div >
             {props.state.auth.userId === props.profile.userId
          ?
         <button className={bb.Bbutton} onClick={()=>{setIsPersonalInfoActive(true)}} >Edit</button>
          : <></>}
            <ul> Personal info:
              <li>Looking for a job: {props.profile.lookingForAJob? <>yaya</>: <>nono</> }</li>
              <li>Stack description: {props.profile.lookingForAJobDescription || <>maybe no maybe yes</> }</li>
              <li>Aditional info: {props.profile.aboutMe || <>maybe no maybe yes</> }</li>
            </ul>
          </div>
}


{isContactsActive
              ? 
          <ContactsInfo {...props} setIsContactsActive={setIsContactsActive}/>
              :
          <div >
             {props.state.auth.userId === props.profile.userId
          ?
         <button 
        //  className={bb.Bbutton}
        className={q.cybbutton}
          onClick={()=>{setIsContactsActive(true)}} >Edit</button>
          : <></>}
            <ul>Contacts:
              <li>GitHub: <a target="_blank" href={props.profile.contacts.github}>{props.profile.contacts.github}</a></li>
              <li>Instagram: <a target="_blank" href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a> </li>
              <li>Twitter: <a  target="_blank" href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a> </li>
              <li>Website: <a target="_blank" href={props.profile.contacts.website}>{props.profile.contacts.website}</a></li>
            </ul>
            </div>
}
          
        </div>
        {props.state.auth.userId === props.profile.userId
          ?
          <AvaLoader SetAvaThunk={props.SetAvaThunk} />
          : <></>}
       
      </div>
      <div>
          <Status {...props}
          // isAuthor={isAuthor}
          />
        </div>
      {props.state.auth.userId === props.profile.userId
        ?
        <><div className={q.WordPosts}>POSTS</div>
          <Form AddPost={props.AddPost} />
          <Posts postsinfo={props.postsinfo} deletePost={props.DeletePost} /></>
        : <></>}
    </div>

  );

}
export default Profile


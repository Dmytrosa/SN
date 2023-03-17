import React from "react";
import q from "./Profile.module.css";
import Posts from "../Posts/Posts";
import Status from "./Status";
import Loader from "../../Assets/Loader";
import {Form} from "./AddPostForm"
import backgr from "../../../additions/backgr.jpg"
import axios from "axios";


 const  Profile = (props)=> {
   
// let imagefile = null
// let files=[null]
//   function uploadPhoto(){
//     const axiosInstance = axios.create({
//       withCredentials: true,
//       baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//       headers: { "API-KEY": "34000a0a-8661-49d6-8fb7-04c1af10a555" }
//   })
//     var formData = new FormData();
//     var imagefile = document.querySelector('#photo');
//     formData.append("image", imagefile.files[0]);
//     axiosInstance.put('profile/photo', formData, {
//       headers:{ 
//         'Content-Type': 'multipart-data'
//       }
//     }).then (res=> console.log(res.data))
//   }

if (!props.profile){
  return(<Loader />)}
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
          
          <div> <img src={props.profile.photos.large} />  </div>
          <div> <input className={q.uploadFile} type="file" id ="photo"/>
          <button className={q.uploadFile}
            >confirm</button></div>
          <div>
             <Status {...props}/>
          </div>
          </div>
         
          <div className={q.WordPosts}>POSTS</div>
          <Form AddPost={props.AddPost}/>
          <Posts  postsinfo={props.postsinfo} />
        
      </div>
      
    );
   
  }
  export default 
  // React.memo(
    Profile
  //   , (props, nextProps) => {
  //   return props !== nextProps
  // },);


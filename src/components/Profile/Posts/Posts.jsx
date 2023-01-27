import React from "react";
import q from "./Posts.module.css";
import Post from "./Post/Post";
import {GetDataActionCreating} from "../../../redux/profileReducer";

const PostArea = (postsinfo) => {
  //debugger;
  let postsrender = postsinfo.postsinfo.dispatch(GetDataActionCreating()).profilepage.postsinfo.map(p => {
    return <Post id={p.id} text={p.text} title={p.title} date={p.date} />;
  });
  return (
    <div className="main">
      <div className={q.post}>{postsrender}</div>
    </div>
  );
};
export default PostArea;

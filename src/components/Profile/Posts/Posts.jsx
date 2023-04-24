import React from "react";
import q from "./Posts.module.css";
import Post from "./Post/Post";

window.props =[]



const PostArea = React.memo((props) => {
  return (
      <div className={q.post}>{props.postsinfo.map(p => {
        return <Post key ={p.id} id={p.id} text={p.text} title={p.title} date={p.date} DeletePost={props.deletePost} />;
      })}</div>
  );
});

export default
//  React.memo(
  PostArea
//   , (props, nextProps) => {
//   return props !== nextProps
// });

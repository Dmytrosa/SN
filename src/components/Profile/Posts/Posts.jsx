import React from "react";
import q from "./Posts.module.css";
import Post from "./Post/Post";

window.props =[]

const PostArea = (props) => {
  let postsrender = props.postsinfo.map(p => {
    return <Post id={p.id} text={p.text} title={p.title} date={p.date} />;
  }); 
  return (
   
      <div className={q.post}>{postsrender}</div>
  );
};

export default
 React.memo(
  PostArea
  , (props, nextProps) => {
  return props !== nextProps
});

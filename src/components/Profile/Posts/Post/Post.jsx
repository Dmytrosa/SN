import React from "react";
import q from "./Post.module.css";

const Post = (postsinfo) => {
  return (
    <div className="main">
      <div className={q.post}>
        <div>posting date: {postsinfo.date} </div>
        <div className={`${q.post} ${q.title}`}>
          <h5>{postsinfo.title}</h5>{" "}
        </div>
        <div className={`${q.post} ${q.text}`}>{postsinfo.text}</div>
      </div>
    </div>
  );
};
export default Post;

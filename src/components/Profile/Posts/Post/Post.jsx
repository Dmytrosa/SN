import React from "react";
import q from "./Post.module.css";

const Post = (postsinfo) => {

  const DeletePost = () => {
    postsinfo.DeletePost(postsinfo.id)
}
  return (
    <div className="main">
      <div className={q.post}>
        <div className={q.dateDelete}>
          <div>posting date: {postsinfo.date} </div>
          <div className={q.delete} onClick={DeletePost}>Delete</div>
        </div>
        <div className={`${q.post} ${q.title}`}>
          <h5>{postsinfo.title}</h5>{" "}
        </div>
        <div className={`${q.post} ${q.text}`}>{postsinfo.text}</div>
      </div>
    </div>
  );
};
export default Post;

import React from "react";
import q from "./Profile.module.css";
import Posts from "./Posts/Posts";
const Profile = (postsinfo) => {
  let postaddingtitle = React.createRef();
  let postaddingtext = React.createRef();

  let AddPost = () => {
    let title = postaddingtitle.current.value;
    let text = postaddingtext.current.value;
    postsinfo.postadding(title, text);
  
  };

  let ChangeNewPostTitle = () => {
let titletext = postaddingtitle.current.value;
postsinfo.rewritenewposttitle(titletext);
console.log(titletext);
  }
  return (

    <div className="main">
      <div>
        <img
          className={q.abobacar}
          src="http://risovach.ru/thumb/upload/200s/2021/04/mem/dababy-car_268903777_orig_.jpg?bll2m"
        />
      </div>
      <div className={q.info}>
        <h2>Я рижа мавпа</h2>
        <h4>
          Status:<text> Я рижа мавпа</text>
        </h4>
        <div className={q.WordPosts}>POSTS</div>

        <form>
          <p>
            Заголовок:{" "}
            <input type="text" ref={postaddingtitle} value={postsinfo.newposttitletext} onChange={ChangeNewPostTitle} name="title"  ></input>
          </p>
          <p>
            {" "}
            Текст посту:{" "}
            <input type="text" ref={postaddingtext} name="text" ></input>
          </p>{" "}
          <p>
            <input type="submit" onClick={AddPost} value="створити"></input>
          </p>{" "}
        </form>
      </div>
      <div>
        <Posts postsinfo={postsinfo} />
      </div>
    </div>
  );
};
export default Profile;

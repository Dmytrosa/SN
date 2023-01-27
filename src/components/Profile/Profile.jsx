import React from "react";
import q from "./Profile.module.css";
import Posts from "./Posts/Posts";
import {PostAddingActionCreating, 
  RewriteNewPostTitleActionCreating,
   RewriteNewPostTextActionCreating} from "../../redux/profileReducer"
const Profile = (postsinfo) => {
  let postaddingtitle = React.createRef();
  let postaddingtext = React.createRef();

  let AddPost = () => {
    let title = postaddingtitle.current.value;
    let text = postaddingtext.current.value;
    postsinfo.dispatch(PostAddingActionCreating(text, title));
    //NW
   // postsinfo.dispatch(RewriteNewPostTextActionCreating(''));
   // postsinfo.dispatch(RewriteNewPostTitleActionCreating('') );
    
    //DURNYA
    postaddingtitle.current.value="";
    postaddingtext.current.value="";
  };

  let ChangeNewPostTitle = () => {
    let titletext = postaddingtitle.current.value;
    postsinfo.dispatch( RewriteNewPostTitleActionCreating(titletext) )  ;
  }

  let ChangeNewPostText = () => {
    let texttext = postaddingtext.current.value;
    postsinfo.dispatch(RewriteNewPostTextActionCreating(texttext) );
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
          Status:  <span> Я рижа мавпа</span>
        </h4>
        <div className={q.WordPosts}>POSTS</div>

        <div>
          <p>
            Заголовок:{" "}
            <input type="text" ref={postaddingtitle} value={postsinfo.newposttexttext} onChange={ChangeNewPostTitle} name="title"  ></input>
          </p>
          <p>
            {" "}
            Текст посту:{" "}
            <input type="text" ref={postaddingtext} value={postsinfo.newposttexttext} onChange={ChangeNewPostText} name="text" ></input>
          </p>{" "}
          <p>
            <input type="submit" onClick={AddPost} value="створити"></input>
          </p>{" "}
        </div>
      </div>
       <div>
         <Posts postsinfo={postsinfo} /> 
      </div>
     
    </div>
  );
};
export default Profile;

import React from "react";
import q from "./Profile.module.css";
import Posts from "./Posts/Posts";


const Profile = (props) => {

  let AddPost = () => {
   props.AddPost();
  };

  let ChangeNewPostTitle = (e) => {
   props.ChangeNewPostTitle(e);
  }

  let ChangeNewPostText = (e) => {
   props.ChangeNewPostText(e);
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

        <div>   image  </div>

        <h4>
          Status:  <span> Я рижа мавпа</span>
        </h4>
        <div className={q.WordPosts}>POSTS</div>
        <div>
          <p>
            <div>

              Заголовок:{" "}
              <textarea
                value={props.newTitleBody}
                onChange={ChangeNewPostTitle}
                placeholder='Введіть заголовок'></textarea>
            </div> </p>
          <p>
            {" "}
            Текст посту:{" "}
            <textarea
                value={props.newTextBody}
                onChange={ChangeNewPostText}
                placeholder='Введіть текст поста'></textarea>
          </p>{" "}
          <p>
            <input type="submit" onClick={AddPost} value="створити"></input>
          </p>{" "}
        </div>
      </div>
      <div>
        <Posts props={props} state={props.state} />
      </div>

    </div>
  );
};
export default Profile;

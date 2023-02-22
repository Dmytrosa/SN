import React from "react";
import q from "./Profile.module.css";
import Posts from "./Posts/Posts";
import Loader from "../Assets/Loader";

const Profile= (props)=> {
  let AddPost = () => {
    props.AddPost();
  };

 let  ChangeNewPostTitle = (e) => {
    let text = e.target.value
    props.ChangeNewPostTitle(text);
  }

 let ChangeNewPostText = (e) => {
    let text = e.target.value
    props.ChangeNewPostText(text);

  }
if (!props.profile){
  return(<Loader/>)}
    return (
      
      <div className="main">
        <div>
          <img
            className={q.abobacar}
            src="http://risovach.ru/thumb/upload/200s/2021/04/mem/dababy-car_268903777_orig_.jpg?bll2m"
          />
        </div>
        <div className={q.info}>
          <h2>Я рижа mавпа</h2>
          <div>   image  </div>
          <h4>
            Status:  <span> Я рижа мавпа</span>
          </h4>
          <div className={q.WordPosts}>POSTS</div>
          <div>
            <p>
              <div>
                <div><img src={props.profile.photos.large} /></div>
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
          <Posts  postsinfo={props.postsinfo} />
        </div>
      </div>
      
    );
    
  }

export default Profile;

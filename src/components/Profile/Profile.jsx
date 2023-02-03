import React from "react";
import q from "./Profile.module.css";
import Posts from "./Posts/Posts";
import {
  PostAddingActionCreating,
  RewriteNewPostTitleActionCreating,
  RewriteNewPostTextActionCreating
} from "../../redux/profileReducer"
const Profile = (props) => {
  let state = props.store.getState().profilepage;   

  let newTitleBody = state.newposttitletext;
  let newTextBody = state.newposttexttext;

  let postaddingtitle = React.createRef();
  let postaddingtext = React.createRef();

  let AddPost = () => {

   // let title = postaddingtitle.current.value;
   // let text = postaddingtext.current.value;
    //debugger
    props.store.dispatch(PostAddingActionCreating());
    //NW
   // props.dispatch(RewriteNewPostTextActionCreating(''));
   // props.dispatch(RewriteNewPostTitleActionCreating('') );

    //DURNYA
    // postaddingtitle.current.value="";
    // postaddingtext.current.value="";
  };

  let ChangeNewPostTitle = (e) => {
    //debugger;
    //let titletext = postaddingtitle.current.value;
    let titletext = e.target.value;
    props.store.dispatch(RewriteNewPostTitleActionCreating(titletext));
  }

  let ChangeNewPostText = () => {
    let texttext = postaddingtext.current.value;
    //debugger;
    props.store.dispatch(RewriteNewPostTextActionCreating(texttext));
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
              value ={newTitleBody}
              onChange ={ChangeNewPostTitle}
              placeholder = 'Введіть заголовок'></textarea>
            {/* <input type="text" ref={postaddingtitle} value={props.newposttexttext} onChange={ChangeNewPostTitle} name="title"  ></input>
          */}

            </div> </p>
          <p>
            {" "}


            Текст посту:{" "}
            <input type="text" ref={postaddingtext} value={newTextBody} onChange={ChangeNewPostText} name="text" ></input>
          </p>{" "}
          <p>

            <input type="submit" onClick={AddPost} value="створити"></input>
          </p>{" "}
        </div>
      </div>
      <div>
        <Posts props={props} state= {state} />
      </div>

    </div>
  );
};
export default Profile;

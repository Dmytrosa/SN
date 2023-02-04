import Profile from "./Profile";
import {
  PostAddingActionCreating,
  RewriteNewPostTitleActionCreating,
  RewriteNewPostTextActionCreating
} from "../../redux/profileReducer"
const ProfileContainer = (props) => {
  
  let state = props.store.getState().profilepage;   

  let newTitleBody = state.newposttitletext;
  let newTextBody = state.newposttexttext;


  let AddPost = () => {
    props.store.dispatch(PostAddingActionCreating());
    props.store.dispatch(RewriteNewPostTextActionCreating(''));
    props.store.dispatch(RewriteNewPostTitleActionCreating('') );
  };

  let ChangeNewPostTitle = (e) => {
    let titletext = e.target.value;
    props.store.dispatch(RewriteNewPostTitleActionCreating(titletext));
  }

  let ChangeNewPostText = (e) => {
    let texttext = e.target.value;
    props.store.dispatch(RewriteNewPostTextActionCreating(texttext));
  }
  return (
<Profile 
AddPost = {AddPost} 
ChangeNewPostTitle={ChangeNewPostTitle} 
ChangeNewPostText ={ChangeNewPostText} 
state = {state}
newTitleBody ={newTitleBody}
newTextBody ={newTextBody}
/>
  );
};
export default ProfileContainer;

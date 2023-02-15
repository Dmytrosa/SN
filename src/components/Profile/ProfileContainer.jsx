import Profile from "./Profile";
import {
  PostAddingActionCreating,
  RewriteNewPostTitleActionCreating,
  RewriteNewPostTextActionCreating
} from "../../redux/profileReducer";
import {connect} from "react-redux";


// const ProfileContainer = (props) => {
  
//   let state = props.store.getState().profilepage;   

//   let AddPost = () => {
//     props.store.dispatch(PostAddingActionCreating());
//     props.store.dispatch(RewriteNewPostTextActionCreating(''));
//     props.store.dispatch(RewriteNewPostTitleActionCreating('') );
//   };

//   let ChangeNewPostTitle = (e) => {
//     let titletext = e.target.value;
//     props.store.dispatch(RewriteNewPostTitleActionCreating(titletext));
//   }

//   let ChangeNewPostText = (e) => {
//     let texttext = e.target.value;
//     props.store.dispatch(RewriteNewPostTextActionCreating(texttext));
//   }
//   return (
// <Profile 
// AddPost = {AddPost} 
// ChangeNewPostTitle={ChangeNewPostTitle} 
// ChangeNewPostText ={ChangeNewPostText} 
// state = {state}
// newTitleBody ={state.newposttitletext}
// newTextBody ={state.newposttexttext}
// />
//   );
// };

let mapStateToProps = (state) =>{

return{
  newTitleBody : state.profilepage.newposttitletext,
  newTextBody : state.profilepage.newposttexttext,
  state: state,
}
}

let mapDispatchToProps = (dispatch) =>{
return{
  AddPost : () =>{
    dispatch(PostAddingActionCreating());
  },
  ChangeNewPostTitle: (e) =>{
    let titletext = e.target.value;
    dispatch(RewriteNewPostTitleActionCreating(titletext));
  },
  ChangeNewPostText :(e)=>{
    let texttext = e.target.value;
    dispatch(RewriteNewPostTextActionCreating(texttext));
  }

}
}

const ProfileContainer = connect (mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileContainer;

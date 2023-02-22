
// const ProfileContainer = (props) => {

//   let state = props.store.getState().profilepage;   

//   let AddPost = () => {
//     props.store.dispatch(PostAdding());
//     props.store.dispatch(RewriteNewPostText(''));
//     props.store.dispatch(RewriteNewPostTitle('') );
//   };

//   let ChangeNewPostTitle = (e) => {
//     let titletext = e.target.value;
//     props.store.dispatch(RewriteNewPostTitle(titletext));
//   }

//   let ChangeNewPostText = (e) => {
//     let texttext = e.target.value;
//     props.store.dispatch(RewriteNewPostText(texttext));
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



import React from "react";
import Profile from "./Profile";
import axios from 'axios';
import {
  PostAdding,
  RewriteNewPostTitle,
  RewriteNewPostText,
  ViewUserProfile
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 27999
    }
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.ViewUserProfile(response.data)
      });
  }


  render() {
    return <Profile  {...this.props} />
  }
};


let mapStateToProps = (state) => {

  return {
    newTitleBody: state.profilepage.newposttitletext,
    newTextBody: state.profilepage.newposttexttext,
    profile: state.profilepage.profile,
    postsinfo: state.profilepage.postsinfo,
    state: state,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    AddPost: () => {
      dispatch(PostAdding());
    },
    ChangeNewPostTitle: (text) => {
      dispatch(RewriteNewPostTitle(text));
    },
    ChangeNewPostText: (text) => {
      dispatch(RewriteNewPostText(text));
    },
    ViewUserProfile: (profile) => {
      debugger
      dispatch(ViewUserProfile(profile));
    },
  }
}

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));

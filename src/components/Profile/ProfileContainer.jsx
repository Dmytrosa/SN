
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
  ViewUserProfile,
  GetStatusThunk,
  SetStatusThunk,
    }
 from "../../redux/profileReducer";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    

    let userId = this.props.router.params.profileId;
    if (!userId) {
      userId = 27999
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.ViewUserProfile(response.data)
      });
      
      debugger
      this.props.GetStatusThunk(userId)
  }
  onPageChanged(){
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
    status:state.profilepage.status,
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
      dispatch(ViewUserProfile(profile));
    },
    GetStatusThunk: (id) =>{
      dispatch(GetStatusThunk(id))
    },
    SetStatusThunk: (status) =>{
      dispatch(SetStatusThunk(status))
    }
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


 export default compose (
  connect(mapStateToProps, mapDispatchToProps) ,
  withAuthRedirect,
  withRouter
)(ProfileContainer)
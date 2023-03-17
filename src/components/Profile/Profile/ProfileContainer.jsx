import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import {
  PostAdding,
  RewriteNewPostTitle,
  RewriteNewPostText,
  ViewUserProfile,
  GetStatusThunk,
  SetStatusThunk,
    }
 from "../../../redux/profileReducer";
import { connect } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { ProfileApi } from "../../../api/api";

 const ProfileContainer= (props)=>  {
  function DidMount() {
    useEffect(() => {let userId = props.router.params.profileId;
          if (!userId) {
            userId = props.state.auth.userId
          }
        ProfileApi.GetUserRpofile(userId, props.ViewUserProfile)
        props.GetStatusThunk(userId)
        }, []);
    return (
      <div>
        <Profile  {...props} />
      </div>
    );
  };
 return DidMount()
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
    AddPost: (header, text) => {
      dispatch(PostAdding(header, text));
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
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
  withRouter
)(ProfileContainer)
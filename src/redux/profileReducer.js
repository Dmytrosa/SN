import { ProfileApi } from "../api/api";
const POSTADDING = () => 'POST-ADDING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';
const VIEWUSERPROFILE = () => 'VIEW-USER-PROFILE';
const GETSTATUS = () => 'GET-STATUS';

let initialState = {
  postsinfo: [
    { id: 0, text: "раша параша", title: "Новини", date: "11:01:1011" },
  ],
  profile: null,
  status: null,
};


const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    case POSTADDING:
      {
        let postadd = {
          id: 1,
          text: action.text,
          title: action.header,
          date: "123",
        };
        return {
          ...state,
          postsinfo: [...state.postsinfo, postadd],
        };
      }
    case REWRITENEWPOSTTITLE:
      {
        return {
          ...state,
          newposttitletext: action.postaddingtitle
        };
      }
    case REWRITENEWPOSTTEXT:
      {
        return {
          ...state,
          newposttexttext: action.postaddingtext
        };
      }
    case VIEWUSERPROFILE:
      {
        return {

          ...state,
          profile: action.profile
        };
      }
    case GETSTATUS:
      {
        return {

          ...state,
          status: action.status
        };
      }
    default:
      return state;
  }
}

export const PostAdding =
  (header, text) => ({ type: POSTADDING, header, text });

export const RewriteNewPostTitle =
  (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle });

export const RewriteNewPostText =
  (postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext });


export const ViewUserProfile =
  (profile) => ({ type: VIEWUSERPROFILE, profile });

export const GetData =
  () => ({ type: GETDATA });

export const ApdateStatus =
  (status) => ({ type: GETSTATUS, status });


export const GetStatusThunk = (id) => {
  return async (dispatch) => {
    let data = await ProfileApi.GetStatus(id)
    dispatch(ApdateStatus(data));
  }
}

export const SetStatusThunk = (status) => {
  return async (dispatch) => {
    let data = await ProfileApi.SetStatus(status)
    if (data.resultCode === 0) {
      dispatch(ApdateStatus(status));
    }
  }
}

export default profileReducer;
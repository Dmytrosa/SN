import { ProfileApi } from "../api/api";
const POSTADDING = () => 'POST-ADDING';
const POSTDELITING = () => 'POST-DELITING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';
const VIEWUSERPROFILE = () => 'VIEW-USER-PROFILE';
const GETSTATUS = () => 'GET-STATUS';
const SAVEPHOTOSUCCESS =()=>'SAVE-PHOTO-SUCCESS';
let initialState = {
  postsinfo: [
    { id: 0, text: " параша", title: "Новини", date: "11:01:1011" },
    { id: 3, text: "раша параша", title: "Новини", date: "11:01:1011" },
    { id: 2, text: "раша ", title: "Новини", date: "11:01:1011" },
    { id: 4, text: "", title: "Новини", date: "11:01:1011" },

  ],
  profile: null,
  status: null,
};


const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    
    case POSTADDING:
      debugger
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
    case POSTDELITING:
      {debugger
        return {
          ...state,
          postsinfo: state.postsinfo.filter(id => id.id != action.id),
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
      debugger
      case SAVEPHOTOSUCCESS: 
        {
          debugger
          return {
            
            ...state,
           profile:{...state.profile, photos: action.photos}
          };
        }
    default:
      return state;
  }
}

export const PostAdding =
  (header, text) => ({ type: POSTADDING, header, text });

export const DeletePost =
  (id) => ({ type: POSTDELITING, id}); 

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

  export const savePhotoSuccess =
  (photos) => ({ type: SAVEPHOTOSUCCESS, photos });


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

export const SetAvaThunk = (ava) => {
  return async (dispatch) => {
    let data = await ProfileApi.savePhoto(ava)
    debugger
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  }
}

export default profileReducer;
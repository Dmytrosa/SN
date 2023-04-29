import { ProfileApi } from "../api/api";
const POSTADDING = () => 'POST-ADDING';
const POSTDELITING = () => 'POST-DELITING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';
const VIEWUSERPROFILE = () => 'VIEW-USER-PROFILE';
const GETSTATUS = () => 'GET-STATUS';
const SAVEPHOTOSUCCESS =()=>'SAVE-PHOTO-SUCCESS';
const APDATEPERSONALINFO =()=>'APDATE-PERSONAL-INFO';
const APDATECONTACTSINFO =()=>'APDATE-CONTACTS-INFO';
let now = new Date().toString()
let initialState = {
  postsinfo: [
    { id: 0, text: " параша", title: "Раша Параша", date: "11:01:1011" },
    { id: 3, text: "раша параша", title: "Раша Параша", date: "11:01:1011" },
    { id: 2, text: "раша ", title: "Раша Параша", date: "11:01:1011" },
    { id: 4, text: "", title: "Раша Параша", date: "11:01:1011" },

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
          date: now ,
        };
        return {
          ...state,
          postsinfo: [...state.postsinfo, postadd],
        };
      }
    case POSTDELITING:
      {
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
      case SAVEPHOTOSUCCESS: 
        {
          return {
            
            ...state,
           profile:{...state.profile, photos: action.photos}
          };
        }
        case APDATEPERSONALINFO: 
        {
          return {
            ...state,
           profile:{...state.profile, aboutMe: action.AditionalInfo,
             fullName: action.FullName, lookingForAJob: action.LookingForAJob,
              lookingForAJobDescripton: action.StackDescription},
          };    
        }
        case APDATECONTACTSINFO: 
        {
          debugger
          return {
            ...state,
           profile:{...state.profile, contacts:{...state.profile.contacts, github: action.GitHub,
            instagram: action.Instagram, twitter: action.Twitter,
            website: action.Website}},
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

export const ApdatePersonalInfo =
  (FullName, LookingForAJob, StackDescription, AditionalInfo) => 
  ({ type: APDATEPERSONALINFO, FullName , LookingForAJob, StackDescription, AditionalInfo});
  
export const ApdateContactsInfo =
  (GitHub, Instagram, Twitter, Website) => 
  ({ type: APDATECONTACTSINFO, GitHub , Instagram, Twitter, Website});


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
    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
    }
  }
}

export default profileReducer;
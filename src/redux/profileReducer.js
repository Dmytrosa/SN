import { ProfileApi } from "../api/api";
const POSTADDING = () => 'POST-ADDING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';
const VIEWUSERPROFILE =() =>'VIEW-USER-PROFILE';
const GETSTATUS = () => 'GET-STATUS';

let initialState = {
  postsinfo: [
    { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },
  ],
  newposttitletext: '',
  newposttexttext: '',
  profile:null,
  status:null,
};


const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    case POSTADDING:
      {
        let postadd = {
          id: 1,
          text: state.newposttexttext,
          title: state.newposttitletext,
          date: "123",
        };
        return {
          ...state,
          postsinfo: [...state.postsinfo, postadd],
          newposttitletext: '',
          newposttexttext: ''
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
        return{
          
          ...state, 
          profile: action.profile
        };
      }
      case GETSTATUS:
        {
          return{
            
            ...state, 
            status: action.status
          };
        }
    default:
      return state;
  }
}

export const PostAdding =
  () => ({ type: POSTADDING });

export const RewriteNewPostTitle =
  (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle});

export const RewriteNewPostText =
  (postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext });


export const ViewUserProfile =
  (profile) => ({ type: VIEWUSERPROFILE, profile });

export const GetData =
  () => ({ type: GETDATA });

export const ApdateStatus =
  (status) => ({ type: GETSTATUS, status });


export const GetStatusThunk = (id) =>{ return (dispatch) =>{
    ProfileApi.GetStatus(id)
       .then(data => {
        dispatch(ApdateStatus(data));
       });
  }}

export const SetStatusThunk = (status) =>{ return (dispatch) =>{
    ProfileApi.SetStatus(status)
       .then(data => {
        if(data.resultCode === 0 ){
          dispatch(ApdateStatus(status));
        }
        
       });
  }}

export default profileReducer;
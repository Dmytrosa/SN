const POSTADDING = () => 'POST-ADDING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';
const VIEWUSERPROFILE =() =>'VIEW-USER-PROFILE';

let initialState = {
  postsinfo: [
    { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },
  ],
  newposttitletext: '',
  newposttexttext: '',
  profile:null
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
        debugger
        return{
          
          ...state, 
          profile: action.profile
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



export default profileReducer;
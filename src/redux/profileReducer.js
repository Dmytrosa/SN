const POSTADDING = () => 'POST-ADDING';
const REWRITENEWPOSTTITLE = () => 'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () => 'REWRITE-NEW-POST-TEXT';
const GETDATA = () => 'GET-DATA';


let initialState = {
  postsinfo: [
    { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },
  ],
  newposttitletext: '',
  newposttexttext: ''
};


const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    case POSTADDING:
      {
        let postadd = {
          id: 1,
          text: state.newposttexttext,
          title: state.newposttitletext,
          date: "15:10:2022"
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
    default:
      return state;
  }
}

export const PostAddingActionCreating =
  () => ({ type: POSTADDING });

export const RewriteNewPostTitleActionCreating =
  (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle: postaddingtitle });

export const RewriteNewPostTextActionCreating =
  (postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext: postaddingtext });

export const GetDataActionCreating =
  () => ({ type: GETDATA });


export default profileReducer;
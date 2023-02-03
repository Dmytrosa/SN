const POSTADDING  =()=>'POST-ADDING';
const REWRITENEWPOSTTITLE = () =>'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () =>'REWRITE-NEW-POST-TEXT';
const GETDATA =() => 'GET-DATA';


let initialState = {
  postsinfo: [
  { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },
], 
newposttitletext: '',
newposttexttext: ''};


const profileReducer =(state=initialState, action)=>{
  switch (action) {
  case POSTADDING:
  {
    debugger
    let postadd = {
      id: 1,
      text: initialState.newposttexttext,
      title: initialState.newposttitletext,
      date: "15:10:2022"
    };
   state.postsinfo.push(postadd);
   debugger;
   return state;
  }
  case REWRITENEWPOSTTITLE:
  {
  state.newposttitletext = action.postaddingtitle;
   return state;
  }
  case  REWRITENEWPOSTTEXT:
    {
      debugger;
      state.newposttexttext = action.postaddingtext;
      return state;
  }
  default:
  return state;
}
}

export const PostAddingActionCreating =
 () => ({ type: POSTADDING});

export const RewriteNewPostTitleActionCreating =
 (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle: postaddingtitle});

export const  RewriteNewPostTextActionCreating =
(postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext: postaddingtext});

export const GetDataActionCreating =
 () => ({ type: GETDATA});


export default profileReducer;
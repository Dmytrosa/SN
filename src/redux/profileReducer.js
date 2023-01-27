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
    let postadd = {
      id: 1,
      text: action.postaddingtext,
      title: action.postaddingtitle,
      date: "15:10:2022"
    };
   state.postsinfo.push(postadd);
   return state;
  }
  case REWRITENEWPOSTTITLE:
  {
  state.newposttitletext = action.postaddingtitle;
   return state;
  }
  case  REWRITENEWPOSTTEXT:
    {
      state.newposttexttext = action.postaddingtext;
      return state;
  }
  default:
  return state;
}
}

export const PostAddingActionCreating =
 (text, title) => ({ type: POSTADDING, postaddingtext: text, postaddingtitle: title });

export const RewriteNewPostTitleActionCreating =

 (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle: postaddingtitle});

export const  RewriteNewPostTextActionCreating =
(postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext: postaddingtext});

export const GetDataActionCreating =
 () => ({ type: GETDATA});


export default profileReducer;
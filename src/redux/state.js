const POSTADDING  =()=>'POST-ADDING';
const REWRITENEWPOSTTITLE = () =>'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () =>'REWRITE-NEW-POST-TEXT';
const GETDATA =() => 'GET-DATA';

let store = {
  _data: {
    chatsinfo: [
      { id: 0, name: "Alina" },
      { id: 1, name: "Natalia" },
      { id: 2, name: "Sashko" },
      { id: 3, name: "Denis" },
      { id: 4, name: "Denis" },
      { id: 5, name: "Denis" },
      { id: 6, name: "Denis" },
      { id: 7, name: "Denis" },
      { id: 8, name: "Denis" },
    ],
    postsinfo: [
      { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },

    ],
    
    newposttitletext: '',
    newposttexttext: ''
  },


 RenderTree() { },

  subscribe(observer) {
    this.RenderTree = observer;
  },
 



  dispatch(action){
if (action.type === POSTADDING )
{
  let postadd = {
    id: 1,
    text: action.postaddingtext,
    title: action.postaddingtitle,
    date: "15:10:2022"
  };
  this._data.postsinfo.push(postadd);
  this.RenderTree(this._data);
}
else if(action.type === REWRITENEWPOSTTITLE){
//debugger;
  this._data.newposttitletext = action.postaddingtitle;
  console.log(this._data.newposttitletext);
  this.RenderTree(this._data);

}
else if (action.type === REWRITENEWPOSTTEXT){

  this._data.newposttexttext = action.postaddingtext;
  this.RenderTree(this._data);

}
else if (action.type === GETDATA){
  return this._data;
}
  },
};



export const PostAddingActionCreating =
 (text, title) => ({ type: POSTADDING, postaddingtext: text, postaddingtitle: title });

export const RewriteNewPostTitleActionCreating =

 (postaddingtitle) => ({ type: REWRITENEWPOSTTITLE, postaddingtitle: postaddingtitle});

export const  RewriteNewPostTextActionCreating =
(postaddingtext) => ({ type: REWRITENEWPOSTTEXT, postaddingtext: postaddingtext});

export const GetDataActionCreating =
 () => ({ type: GETDATA});


window.data = store._data;
export default store

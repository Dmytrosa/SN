import ProfileReducer from "./profileReducer";
import ChatsReducer from "./chatsReduser";

const POSTADDING  =()=>'POST-ADDING';
const REWRITENEWPOSTTITLE = () =>'REWRITE-NEW-POST-TITLE';
const REWRITENEWPOSTTEXT = () =>'REWRITE-NEW-POST-TEXT';
const GETDATA =() => 'GET-DATA';

let store = {
  _data: {
    chatspage:{
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
    ],},
   profelipage:{
    postsinfo: [
    { id: 0, text: "раша параша", title: "Новини", date: "15:10:2022" },

  ], 
  newposttitletext: '',
  newposttexttext: ''},
    
  },


 RenderTree() { },

  subscribe(observer) {
    this.RenderTree = observer;
  },
 



  dispatch(action){

  this._data = ProfileReducer (this._data, action)
  this.RenderTree(this._data);
  this._data.chatspage = ChatsReducer (this._data.chatspage, action)
  this.RenderTree(this._data);
   if (action.type === GETDATA){
    return this._data;
  }
  this.RenderTree(this._data);
  

  },
};




window.data = store._data;
export default store

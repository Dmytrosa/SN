let store = {
  RenderTree () {},
  data : {
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
 PostAdding  (postaddingtext, postaddingtitle) {
  let postadd = {
    id: 1,
    text: postaddingtext,
    title: postaddingtitle,
    date: "15:10:2022"
  };
  this.data.postsinfo.push(postadd);
  this.RenderTree(this.data, this.PostAdding, this.RewriteNewPostTitle);
},
RewriteNewPostTitle (postaddingtitle)  {
  this.data.newposttitletext = postaddingtitle;
  this.RenderTree(this.data, this.PostAdding, this.RewriteNewPostTitle, this.RewriteNewPostText);
},
RewriteNewPostText (postaddingtext) {
  this.data.newposttexttext = postaddingtext;
  this.RenderTree(this.data, this.PostAdding, this.RewriteNewPostTitle, this.RewriteNewPostText);
},
subscribe (observer){
  this.RenderTree = observer;
},
};



window.data = store.data;  
export default store

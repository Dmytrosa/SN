import { RenderTree } from "../RenderTree";
let data = {
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
  newposttitletext: '123'
};

export let PostAdding = (postaddingtext, postaddingtitle) => {
  let postadd = {
    id: 1,
    text: postaddingtext,
    title: postaddingtitle,
    date: "15:10:2022"
  };
  data.postsinfo.push(postadd);
RenderTree(data);
};

export let RewriteNewPostTitle = (postaddingtitle) => {
  data.newposttitletext = postaddingtitle;
RenderTree(data);
};

export default data;

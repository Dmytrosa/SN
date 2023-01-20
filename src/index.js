
import './index.css';
//  \/   import Data, {PostAdding, RewriteNewPostTitle, RewriteNewPostText, subscribe} from "./redux/state"; 
import Store from "./redux/state";
// PostAdding('22000','2313')
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//PostAdding('22000','2313')

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderTree =()=>{
root.render(
  
  <React.StrictMode>
    
    <App 
    chatsinfo={Store.data.chatsinfo} 
    postsinfo={Store.data.postsinfo} 
    newposttitletext={Store.data.newposttitletext}
    newposttexttext={Store.data.newposttexttext}
    postadding= {Store.PostAdding.bind(Store)}
    rewritenewposttitle={Store.RewriteNewPostTitle.bind(Store)}
    rewritenewposttext={Store.RewriteNewPostText.bind(Store)}

     />
     
  </React.StrictMode>
);}

RenderTree(Store.data, Store.PostAdding, Store.RewriteNewPostTitle, Store.RewriteNewPostText);

Store.subscribe(RenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

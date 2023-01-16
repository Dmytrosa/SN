import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PostAdding} from "./redux/state";
//PostAdding('22000','2313')

const root = ReactDOM.createRoot(document.getElementById('root'));

export let RenderTree =(Data, PostAdding, RewriteNewPostTitle )=>{
root.render(
  
  <React.StrictMode>
    
    <App 
    chatsinfo={Data.chatsinfo} 
    postsinfo={Data.postsinfo} 
    newposttitletext={Data.newposttitletext}
    postadding= {PostAdding}
    rewritenewposttitle={RewriteNewPostTitle}
     />
     
  </React.StrictMode>
);}

reportWebVitals();

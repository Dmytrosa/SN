
import './index.css';
import reportWebVitals from './reportWebVitals';
import Data from "./redux/state";
import {PostAdding} from "./redux/state";
import {RenderTree} from "./RenderTree";
import {RewriteNewPostTitle} from "./redux/state";
// PostAdding('22000','2313')
RenderTree(Data, PostAdding, RewriteNewPostTitle);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

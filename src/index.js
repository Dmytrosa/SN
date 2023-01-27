import './index.css';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <App
      state ={state}
        dispatch={store.dispatch.bind(store)}
        store = {store}
      />
    </React.StrictMode>
  );
}

RenderTree(store.getState());

store.subscribe(()=>{
  let state = store.getState();
  RenderTree(state);
});
reportWebVitals();

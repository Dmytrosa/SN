import './index.css';
import Store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderTree = () => {
  root.render(
    <React.StrictMode>
      <App
        dispatch={Store.dispatch.bind(Store)}
      />
    </React.StrictMode>
  );
}

RenderTree(Store.dispatch);
Store.subscribe(RenderTree);reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './Reducer.js';
import Counter from "./componets/Counter";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>        
        <Counter/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//  <App/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


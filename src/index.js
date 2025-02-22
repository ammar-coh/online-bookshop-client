import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import 'antd/dist/reset.css';
import "./index.css";
const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CssBaseline />
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import './index.css';
import {  BrowserRouter } from 'react-router-dom';
import Router from './router';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={zhCN}>
          <BrowserRouter>
              <Router />
          </BrowserRouter>
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

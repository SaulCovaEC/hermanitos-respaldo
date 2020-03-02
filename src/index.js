import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale-provider/es_ES';
import './components/index.css';
import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <ConfigProvider locale={esES}>
      <App />
    </ConfigProvider>
  </Router>
, document.getElementById('root'));

serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Main from './containers/Main';
import { BrowserRouter, Route } from 'react-router-dom'
// import { Router, Route, IndexRoute } from 'react-router';

const router = (
  <BrowserRouter>
    <Route path='/' component={Main} />
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();

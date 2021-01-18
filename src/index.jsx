import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import 'semantic-ui-less/semantic.less';
import '../semantic-ui/semantic.less';
import './scc.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);

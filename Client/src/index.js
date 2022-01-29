import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.scss';
import App from './App';
import store from './stores';

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <Router>
        <App />
      </Router>
    </IconContext.Provider>
  </Provider>,
  document.getElementById('root')
);

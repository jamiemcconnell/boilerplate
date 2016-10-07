import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Import the top level SCSS file - it is compiled and removed from the JS code
// by webpack.
//
import style from './sass/main.scss';

// TopLevel Containers.
//
import DemoContainer from './components/Demo/DemoContainer';

// Redux reducers.
//
import reducers from './reducers/index';

// Redux middleware.
//
const middleware = [];

// Add logging if we're not in production.
//
if(process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger');
  const logger = createLogger();
  middleware.push(logger);
}

// Redux store.
//
const store = compose(applyMiddleware(...middleware))(createStore)(reducers);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={DemoContainer} />
    </Router>
  </Provider>, document.getElementById('mount'));

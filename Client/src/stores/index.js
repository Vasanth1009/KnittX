import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';

import customerReducer from './customerStore';
import notificationReducer from './notificationStore';

const reducers = combineReducers({
  customers: customerReducer,
  notification: notificationReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

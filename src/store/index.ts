import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import locationReducer from './location/reducers';

const combinedReducers = combineReducers({ location: locationReducer });

const initialState = {};

const middleware = [thunk];

const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

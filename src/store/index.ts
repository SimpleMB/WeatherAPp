import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import locationReducer from './location/reducers';
import weatherReducer from './weather/reducers';
import { Location } from './location/types';
import { Weather } from './weather/types';

export interface RootState {
  location: Location;
  weather: Weather;
}
const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

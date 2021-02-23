import { createStore, combineReducers } from 'redux';
import basketReducer from './basket';
import userReducer from './user';

const reducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});

const store = createStore(reducer);

export default store;

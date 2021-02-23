import { createStore, combineReducers } from 'redux';
import basketReducer, { selectors as basketSelectors } from './basket';
import userReducer from './user';

export const selectors = {
  getBasketItems: state => basketSelectors.getItems(state.basket),
};

const reducer = combineReducers({
  user: userReducer,
  basket: basketReducer,
});

const store = createStore(reducer);

export default store;

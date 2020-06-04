import { combineReducers } from 'redux';

// Você pode colocar múltiplos reducers
import cart from './cart/reducer';

export default combineReducers({
  cart,
});

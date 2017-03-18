import { combineReducers } from 'redux';
import curse from '../curse/curse-reducer';
import counterReducer from '../curse/counter-reducer'

export default combineReducers ({
  curse,
  counterReducer
});

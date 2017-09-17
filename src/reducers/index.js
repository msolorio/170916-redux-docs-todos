import { combineReducers } from 'redux';
import inputReducer from './form';
import todosReducer from './todos';

export default combineReducers({
  inputReducer,
  todosReducer
});

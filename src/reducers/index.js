import { combineReducers } from 'redux';
import inputReducer from './input';
import todosReducer from './todos';
import filterReducer from './filter';

export default combineReducers({
  inputReducer,
  todosReducer,
  filterReducer
});

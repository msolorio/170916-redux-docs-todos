import * as actions from '../actions';

const initialState = {
  inputVal: ''
};

export default function formReducer(state=initialState, action) {

  if (action.type === actions.CHANGE_INPUT) {
    return Object.assign({}, state, {
      inputVal: action.inputVal
    });
  }

  return state;
};

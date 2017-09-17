import * as actions from '../actions';

const initialState = {
  filter: 'ALL'
};

export default function filterReducer(state=initialState, action) {

  if (action.type === actions.APPLY_FILTER) {
    // return Object.assign({}, state, {
    //   filter: action.filter
    // });
    return { filter: action.filter };
  }

  return state;

};

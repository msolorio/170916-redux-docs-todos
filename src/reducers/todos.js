import * as actions from '../actions';

const initialState = {
  todos: []
};

export default function todosReducer(state=initialState, action) {

  if (action.type === actions.ADD_TODO) {
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          todoText: action.todoText,
          completed: false
        }
      ]
    });
  }

  else if (action.type === actions.TOGGLE_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.map((todo, index) => {
          if (index === action.todoIndex) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          } else {
            return todo;
          }
        })
    });
  }

  else if (action.type === actions.REMOVE_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.filter((todo, index) => {
        return index !== action.todoIndex;
      })
    });
  }

  return state;
}

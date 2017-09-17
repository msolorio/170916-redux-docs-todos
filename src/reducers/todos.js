import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: []
};

export default function todosReducer(state=initialState, action) {
  if (action.type === ADD_TODO) {
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

  else if (action.type === TOGGLE_TODO) {
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

  return state;
}

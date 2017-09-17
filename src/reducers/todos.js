import * as actions from '../actions';

const initialState = {
  todos: [],
  nextTodoIndex: 0
};

export default function todosReducer(state=initialState, action) {

  if (action.type === actions.ADD_TODO) {
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          todoText: action.todoText,
          todoIndex: action.nextTodoIndex,
          completed: false
        }
      ],
      nextTodoIndex: state.nextTodoIndex + 1
    });
  }

  else if (action.type === actions.TOGGLE_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.map((todo) => {
          if (todo.todoIndex === action.todoIndex) {
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
      todos: state.todos.filter((todo) => {
        return todo.todoIndex !== action.todoIndex;
      })
    });
  }

  return state;
}

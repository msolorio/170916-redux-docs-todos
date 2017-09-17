export const CHANGE_INPUT = 'CHANGE_INPUT';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const APPLY_FILTER = 'APPLY_FILTER';

export const changeInput = (inputVal) => ({
    type: CHANGE_INPUT,
    inputVal
});

export const addTodo = (todoText, nextTodoIndex) => ({
  type: ADD_TODO,
  todoText,
  nextTodoIndex
});

export const toggleTodo = (todoIndex) => ({
  type: TOGGLE_TODO,
  todoIndex
});

export const removeTodo = (todoIndex) => ({
  type: REMOVE_TODO,
  todoIndex
});

export const applyFilter = (filter) => ({
  type: APPLY_FILTER,
  filter
});

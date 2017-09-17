export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const changeInput = (inputVal) => ({
    type: CHANGE_INPUT,
    inputVal
});

export const addTodo = (todoText) => ({
  type: ADD_TODO,
  todoText
});

export const toggleTodo = (todoIndex) => ({
  type: TOGGLE_TODO,
  todoIndex
});

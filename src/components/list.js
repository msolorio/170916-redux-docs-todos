import React from 'react';
import ListItem from './listItem';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';

export function List(props) {
  function onTodoClick(todoIndex) {
    props.dispatch(toggleTodo(todoIndex));
  };

  function onRemoveClick(todoIndex) {
    props.dispatch(removeTodo(todoIndex));
  }

  function getTodos() {
    switch(props.filter) {
      case 'ALL':
        return props.todos;
      case 'COMPLETE':
        return props.todos.filter((todo) => todo.completed === true);
      case 'INCOMPLETE':
        return props.todos.filter((todo) => todo.completed === false);
      default:
        return props.todos;
    }
  }

  const todoList = getTodos().map((todo, index) => {
    return (
      <ListItem todoText={todo.todoText}
        completed={todo.completed}
        key={index}
        onTodoClick={() => onTodoClick(todo.todoIndex)}
        onRemoveClick={() => onRemoveClick(todo.todoIndex)} />
    );
  });

  return (
    <ul>
      {todoList}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos,
  filter: state.filterReducer.filter
});

export default connect(mapStateToProps)(List);

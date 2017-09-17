import React from 'react';
import ListItem from './listItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

export function List(props) {
  function onTodoClick(todoIndex) {
    props.dispatch(toggleTodo(todoIndex));
  };

  const todoList = props.todos.map((todo, index) => {
    return (
      <ListItem todoText={todo.todoText}
        completed={todo.completed}
        key={index}
        index={index}
        onTodoClick={() => onTodoClick(index)}/>
    );
  });

  return (
    <ul>
      {todoList}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todosReducer.todos
});

export default connect(mapStateToProps)(List);

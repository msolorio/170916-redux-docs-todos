import React from 'react';

export default function listItem(props) {

  return (
    <li>
      <span onClick={props.onRemoveClick}>X</span>
      <p style={{textDecoration: props.completed ? 'line-through' : 'none'}}
        onClick={props.onTodoClick}>
        {props.todoText}
      </p>
    </li>
  );
};

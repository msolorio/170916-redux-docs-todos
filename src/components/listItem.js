import React from 'react';

export default function listItem(props) {

  return (
    <li>
      <p style={{textDecoration: props.completed ? 'line-through' : 'none'}}
        onClick={props.onTodoClick}>
        {props.todoText}
      </p>
    </li>
  );
};

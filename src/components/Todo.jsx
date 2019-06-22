import React from 'react';

const Todo = (props) => (
  <li>
    <input type="checkbox"/>
    <span onClick={() => props.handleEdit(props.id)}>{props.todo}</span>
    <button onClick={() => props.handleDelete(props.id)}>
      x
    </button>
  </li>
)

export default Todo;
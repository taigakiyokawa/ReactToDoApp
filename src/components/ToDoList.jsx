import React from 'react';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <li key={i}>
          {todo.title}
          <button>x</button>
        </li>
      )
    })}
  </ul>
)

export default TodoList;
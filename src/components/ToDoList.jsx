import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todos.map((todo, i) => {
      return (
        <Todo key={i} id={i} title={todo.title} handleEdit={ props.handleEdit } handleDelete={ props.handleDelete }/>
      )
    })}
  </ul>
)

export default TodoList;
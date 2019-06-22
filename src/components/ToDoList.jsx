import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todoList.map((todo, i) => {
      return (
        <Todo key={i} id={i} todo={todo} handleEdit={ props.handleEdit } handleDelete={ props.handleDelete }/>
      )
    })}
  </ul>
)

export default TodoList;
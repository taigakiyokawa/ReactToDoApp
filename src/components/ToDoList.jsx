import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <ul>
    {props.todoList.map((todo, id) => {
      return (
        <Todo
          key={id}
          id={id}
          title={todo.title} 
          handleEdit={ props.handleEdit } 
          handleDelete={ props.handleDelete }
          handleDone={ props.handleDone }
        />
      )
    })}
  </ul>
)

export default TodoList;
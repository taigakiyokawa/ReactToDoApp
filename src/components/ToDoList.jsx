import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <div>
    <div>
      <input type="checkbox" checked={ props.isAllDone } onChange={ props.handleAllDone }/>
      <span>All done</span>
    </div>
    <ul>
      {props.todoList.map((t, id) => {
        return (
          <Todo
            key={ id }
            id={ id }
            title={ t.title }
            isDone={ t.isDone }
            isEdit={ t.isEdit }
            handleEdit={ props.handleEdit } 
            handleDelete={ props.handleDelete }
            handleDone={ props.handleDone }
          />
        )
      })}
    </ul>
  </div>
);

export default TodoList;
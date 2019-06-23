import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (
  <div>
    <div>
      <input type="checkbox" checked={ props.isAllDone } onChange={ props.handleAllDone }/>
      {console.log(props.isAllDone)}
      <span>all done</span>
    </div>
    <ul>
      {props.todoList.map((todo, id) => {
        return (
          <Todo
            key={ id }
            id={ id }
            title={ todo.title }
            isDone={ todo.isDone }
            handleEdit={ props.handleEdit } 
            handleDelete={ props.handleDelete }
            handleDone={ props.handleDone }
          />
        )
      })}
    </ul>
  </div>
)

export default TodoList;
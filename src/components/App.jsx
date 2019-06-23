import React from 'react';
import Form from './Form';
import TodoList from './TodoList';
import { ENETDOWN } from 'constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todoList: [],
      isAllDone: false,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  // Create TODO
  handleCreate = (event) => {
    // Prevent redirect
    event.preventDefault();
    const newTodo = event.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, {title: newTodo, isDone: false}];
    // Update state
    this.setState(() => ({ todoList: todoList }));
    // Reset input value
    event.target.title.value = "";
  };

  // Edit TODO
  handleEdit = (id) => {
    console.log(`TODO ${id} is Edit mode now.`);
  }

  // Delete TODO
  handleDelete = (id) => {
    const deleteTodo = this.state.todoList[id];
    console.log(`delete: ${deleteTodo.title}`);
    const todoList = this.state.todoList.filter(todo => todo !== deleteTodo);
    // Update state
    this.setState({ todoList: todoList });
  }

  handleDone = (id) => {
    const todoList = this.state.todoList.map((todo, i) => {
        return (
          (i === id) ? {...todo, isDone: !todo.isDone} : todo
        )
      }
    )
    // const todo = this.state.todoList[id];
    // console.log(todo.title);
    this.setState({ todoList: todoList });
  }
  
  render () {
    console.log(this.state.todoList);
    // console.log(this.state.todoList.length);
    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList
          todoList={ this.state.todoList }
          handleEdit={ this.handleEdit }
          handleDelete={ this.handleDelete }
          handleDone={ this.handleDone }
        />
      </div>
    )
  }
}
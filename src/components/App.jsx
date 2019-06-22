import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todoList: [],
      isDisabled: true,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // Create TODO
  handleCreate = (event) => {
    // Prevent redirect
    event.preventDefault();
    const newTodo = event.target.title.value;
    console.log(`newTodo: ${newTodo}`);
    console.log(`this.state.todoList: ${this.state.todoList}`);
    const todoList = [...this.state.todoList, newTodo];
    console.log(`todoList: ${todoList}`);
    // Update state
    this.setState(() => ({ todoList: todoList }));
    console.log(todoList);
    // Reset input value
    event.target.title.value = "";
  };

  // Edit TODO
  handleEdit(i) {
    console.log(`TODO ${i} is Edit mode now.`);
  }

  // Delete TODO
  handleDelete(i) {
    this.state.todoList.splice(i, 1);
    // Update state
    this.setState({ todoList: this.state.todoList });
  }
  
  render () {
    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList todoList={ this.state.todoList } handleEdit={ this.handleEdit } handleDelete={ this.handleDelete }/>
      </div>
    )
  }
}
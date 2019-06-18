import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todo: [],
      isDisabled: true,
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  // Create TODO
  handleCreate(event) {
    // console.log(e.target.title.value);
    // Prevent redirect
    event.preventDefault();
    // Add data to todo-array from Form
    this.state.todo.push({ title: event.target.title.value }); // Doesn't save yet
    // Update state
    this.setState({ todo: this.state.todo });
    // Reset input value
    event.target.title.value = "";
  }

  // Edit TODO
  handleEdit(i) {
    console.log(`TODO ${i} is Edit mode now.`);
  }

  // Delete TODO
  handleDelete(i) {
    this.state.todo.splice(i, 1);
    // Update state
    this.setState({ todo: this.state.todo });
  }
  
  render () {
    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList todos={ this.state.todo } handleEdit={ this.handleEdit } handleDelete={ this.handleDelete }/>
      </div>
    )
  }
}
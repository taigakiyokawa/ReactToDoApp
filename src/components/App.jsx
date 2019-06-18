import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      todo: [],
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  // Save todo
  handleCreate(event) {
    // console.log(e.target.title.value);
    // Prevent redirect
    event.preventDefault();
    // Add data to todo-array from Form
    this.state.todo.push({ title: event.target.title.value }); // Doesn't save yet
    // Update state
    this.setState({ todo: this.state.todo });
    // Reset value
    event.target.title.value = "";
  }
  
  render () {
    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList todos={ this.state.todo }/>
      </div>
    )
  }
}
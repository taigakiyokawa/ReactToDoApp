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
    const todoList = [...this.state.todoList, {title: newTodo, isDone: false}];
    // Update state
    this.setState(() => ({ todoList: todoList }));
    // Reset input value
    event.target.title.value = "";
  };

  // Edit TODO
  handleEdit(i) {
    console.log(`TODO ${i} is Edit mode now.`);
  }

  // Delete TODO
  handleDelete(id) {
    const deleteTodo = this.state.todoList[id];
    console.log(`delete: ${deleteTodo}`);
    const todoList = this.state.todoList.filter(todo => todo !== this.state.todoList[id]);
    console.log(todoList);
    // Update state
    this.setState({ todoList: todoList });
  }
  
  render () {
    console.log(this.state.todoList);
    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList todoList={ this.state.todoList } handleEdit={ this.handleEdit } handleDelete={ this.handleDelete }/>
      </div>
    )
  }
}
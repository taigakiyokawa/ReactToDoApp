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
    this.handleAllDone = this.handleAllDone.bind(this);
  }

  // Create TODO
  handleCreate = (event) => {
    // Prevent redirect
    event.preventDefault();
    const newTodo = event.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, {title: newTodo, isDone: false, isEditMode: false}];
    // Update state
    this.setState(() => ({ todoList: todoList, isAllDone: false }));
    // Reset input value
    event.target.title.value = "";
  };

  // Edit TODO
  handleEdit = (id) => {
    const editTodo = this.state.todoList[id];
    console.log(`TODO ${id} is Edit mode now.`);

  }

  // Delete TODO
  handleDelete = (id) => {
    const deleteTodo = this.state.todoList[id];
    console.log(`delete: ${deleteTodo.title}`);
    const todoList = this.state.todoList.filter(todo => todo !== deleteTodo);
    const isDoneList = todoList.map((todo) => { return todo.isDone })
    const isAllDone = this.and(isDoneList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  and = (array) => {
    return array.reduce((prev, current) => {
      return prev && current
    })
  }

  handleDone = (id) => {
    const todoList = this.state.todoList.map((todo, i) => {
        return (
          (i === id) ? {...todo, isDone: !todo.isDone} : todo
        )
      }
    )
    const isDoneList = todoList.map((todo) => { return todo.isDone })
    console.log(isDoneList);
    const isAllDone = this.and(isDoneList);

    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  handleAllDone = () => {
    const isAllDone = !this.state.isAllDone
    const todoList = this.state.todoList.map(todo => { return (isAllDone) ? {...todo, isDone: true} : {...todo, isDone: false}})
    
    this.setState({todoList: todoList, isAllDone: isAllDone});
  }
  



  render () {
    console.log(this.state.todoList);
    console.log(this.state.isAllDone);

    return (
      <div>
        <h1>TODO</h1>
        <Form handleCreate={ this.handleCreate }/>
        <TodoList
          todoList={ this.state.todoList }
          isAllDone={ this.state.isAllDone }
          handleEdit={ this.handleEdit }
          handleDelete={ this.handleDelete }
          handleDone={ this.handleDone }
          handleAllDone={ this.handleAllDone }
        />
      </div>
    )
  }
}
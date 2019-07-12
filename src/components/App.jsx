import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isAllDone: false,
    };

    // this.handleCreate = this.handleCreate.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleDone = this.handleDone.bind(this);
    // this.handleAllDone = this.handleAllDone.bind(this);
  }

  // Return true/false result by AND for all values of todoList
  and = (todoList) => {
    if (todoList.length === 0) {
      return false;
    } else {
      // Create an Array has only isDone[true/false]
      const isDoneList = todoList.map(t => { return t.isDone; });
      return isDoneList.reduce((prev, current) => { return prev && current; });
    }
  }

  // Create a new todo{title: string, isDone: boolean, isEditMode: boolean}
  handleCreate = (event) => {
    // Prevent redirect
    event.preventDefault();
    const newTodo = event.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, { title: newTodo, isDone: false, isEdit: false }];
    // Update state
    this.setState({ todoList: todoList, isAllDone: false });
    // Reset text field values
    event.target.title.value = "";
  }

  // Change isEditMode of todoList[i] => true/false
  handleEdit = (id) => {
    console.log(`TODO ${id} is Edit mode now.`);
    const todoList = this.state.todoList.map((t, i) => {
      return (i === id) ? {...t, isEdit: !t.isEdit} : t;
    });
    this.setState({ todoList: todoList });
  }

  handleUpdate = (id, event) => {
    event.preventDefault();
    const value = event.target.title.value
    console.log(`TODO${id}: ${value}`)
    
  }

  // Delete a todoList[id]
  handleDelete = (id) => {
    const deleteTodo = this.state.todoList[id];
    console.log(`delete: ${deleteTodo.title}`);
    const todoList = this.state.todoList.filter(t => t !== deleteTodo);
    // If all isDone of todoList is true, isAllDone will be true.
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Change todoList[id].isDone => true/false
  handleDone = (id) => {
    const todoList = this.state.todoList.map((t, i) => {
        return (i === id) ? {...t, isDone: !t.isDone} : t;
    });
    // If all isDone of todoList is true, isAllDone will be true.
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Change isAllDone => true/false
  handleAllDone = () => {
    const isAllDone = !this.state.isAllDone;
    const todoList = this.state.todoList.map(t => { 
      return (isAllDone) ? {...t, isDone: true} : {...t, isDone: false};
    });
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }
  



  render() {
    console.log("--- updated ---");
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
          handleUpdate={ this.handleUpdate }
          handleDelete={ this.handleDelete }
          handleDone={ this.handleDone }
          handleAllDone={ this.handleAllDone }
        />
      </div>
    );
  }
}
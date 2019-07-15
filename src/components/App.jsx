import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isAllDone: false,
      isEmpty: true,
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

  // Create a new todo{title: string, isDone: boolean, isEdit: boolean}
  handleCreate = (event) => {
    // Prevent redirect
    event.preventDefault();
    const newTodo = event.target.title.value;
    console.log(`create: ${newTodo}`);
    const todoList = [...this.state.todoList, { title: newTodo, isDone: false, isEdit: false }];
    // Update state
    this.setState({ todoList: todoList, isAllDone: false, isEmpty: true });
    // Reset text field values
    event.target.title.value = "";
  }

  // Change "todoList[id].isEdit" => true/false
  handleEdit = (id) => {
    console.log(`TODO ${id} is Edit mode now.`);
    const todoList = this.state.todoList.map((t, i) => {
      return (i === id) ? {...t, isEdit: !t.isEdit} : t;
    });
    this.setState({ todoList: todoList });
  }

  handleUpdate = (id, event) => {
    event.preventDefault();
    const updateTodo = event.target.title.value
    console.log(`TODO${id}: ${updateTodo}`)
    const todoList = this.state.todoList.map((t, i) => {
      return (i === id) ? {...t, title: updateTodo, isEdit: false} : t;
    });
    this.setState({ todoList: todoList });
  }

  // Delete "todoList[id]"
  handleDelete = (id) => {
    const deleteTodo = this.state.todoList[id];
    console.log(`delete: ${deleteTodo.title}`);
    // Create a new todoList without "deleteTodo"
    const todoList = this.state.todoList.filter(t => t !== deleteTodo);
    // If all "isDone" in "todoList" is true, "this.and(todoList)" will return true
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Change todoList[id].isDone => true/false
  handleDone = (id) => {
    const todoList = this.state.todoList.map((t, i) => {
        return (i === id) ? {...t, isDone: !t.isDone} : t;
    });
    // If all "isDone" in todoList is true, "isAllDone" will be true.
    const isAllDone = this.and(todoList);
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }

  // Change "isAllDone" => true/false
  handleAllDone = () => {
    const isAllDone = !this.state.isAllDone;
    const todoList = this.state.todoList.map(t => {
      // If "isAllDone" is true, all "isDone" in todoList will be true. 
      // Else, they will be false.
      return (isAllDone) ? {...t, isDone: true} : {...t, isDone: false};
    });
    // Update state
    this.setState({ todoList: todoList, isAllDone: isAllDone });
  }
  
  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    const isEmpty = (value === "") ? true : false
    console.log(`isEmpty: ${isEmpty}`);
    this.setState({ isEmpty: isEmpty });
  }



  render() {
    console.log("--- updated ---");
    console.log(this.state.todoList);
    console.log(this.state.isAllDone);

    return (
      <div>
        <h1>TODO</h1>
        <p>tap to edit</p>
        <Form handleCreate={ this.handleCreate } isEmpty={ this.state.isEmpty } handleChange={ this.handleChange }/>
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
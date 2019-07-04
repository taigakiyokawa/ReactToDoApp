import React from 'react';

class Todo extends React.Component {
  renderDefaultView = () => {
    return (
      <span onClick={ () => this.props.handleEdit(this.props.id) }>
        {this.props.title}
      </span>
    )
  }

  renderEditView = () => {
    return (
      <form action="">
        <input type="text"/>
        <input type="submit" value="UPDATE"/>
      </form>
    )
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isDone } onChange={ () => this.props.handleDone(this.props.id) }/>
        { this.props.isEdit ? this.renderEditView() : this.renderDefaultView() }
        <button onClick={ () => this.props.handleDelete(this.props.id) }>
          x
        </button>
      </li>
    )
  }
}


// const Todo = (props) => (
//   <li>
//     <input type="checkbox" checked={ props.isDone } onChange={ () => props.handleDone(props.id) }/>
//     <span onClick={ () => props.handleEdit(props.id) }>
//       { props.isEdit ? 
//         <form action="">
//           <input type="text"/>
//           <input type="submit"/>
//         </form> : 
//         props.title }
//     </span>
//     <button onClick={ () => props.handleDelete(props.id) }>
//       x
//     </button>
//   </li>
// );

export default Todo;
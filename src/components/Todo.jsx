import React from 'react';

class Todo extends React.Component {

  // Render a todo title if "isEdit" is false
  renderDefaultView = () => {
    return (
      <span onClick={ () => this.props.handleEdit(this.props.id) }>
        { this.props.title }
      </span>
    )
  }

  // Render form for updating todo if "isEdit" is true
  renderEditView = () => {
    return (
      <form onSubmit={ this.props.handleUpdate.bind(this, this.props.id) }>
        <input 
          id={ this.props.id } 
          type="text" 
          name="title" 
          defaultValue={ this.props.title } 
          required
        />
        <input type="submit" value="UPDATE"/>
      </form>
    )
  }

  render() {
    return (
      <li>
        <input 
          type="checkbox" 
          checked={ this.props.isDone } 
          onChange={ () => this.props.handleDone(this.props.id) }
        />
        { this.props.isEdit ? this.renderEditView() : this.renderDefaultView() }
        <button onClick={ () => this.props.handleDelete(this.props.id) }>
          x
        </button>
      </li>
    )
  }
}

export default Todo;
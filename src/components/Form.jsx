import React from 'react';

const Form = (props) => (
  <form onSubmit={ props.handleCreate }>
    <div>
      <input type="text" name="title" onChange={ props.handleChange } required/>
      <input type="submit" disabled={ props.isEmpty } value="CREATE"/>
    </div>
  </form>
);

export default Form;
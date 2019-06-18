import React from 'react';

const Form = (props) => (
  <form onSubmit={ props.handleAdd }>
    <div>
      <input type="text" name="title"/>
      <input type="submit" value="CREATE"/>
    </div>
  </form>
)

export default Form;
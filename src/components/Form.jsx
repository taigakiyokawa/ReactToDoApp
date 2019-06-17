import React from 'react';

const Form = (props) => (
  <form className="siimple-form">
    <div className="siimple-form-field">
      <input type="text" name="title" className="siimple-input siimple--bg-white"/>
      <input type="submit" value="CREATE" className="siimple-btn siimple-btn--teal"/>
    </div>
  </form>
)

export default Form;
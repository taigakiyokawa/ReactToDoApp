import React from 'react';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { massage: 'something' }
  }

  onChange(e) {
    this.setState( {message: e.target.value} )
  }
  
  render () {
    return (
      <div className="siimple-box">
        <h1 className="siimple-box-title">TODO</h1>
        <Form/>
      </div>
    )
  }
}
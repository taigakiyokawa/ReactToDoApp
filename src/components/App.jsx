import React from 'react';
import Form from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { massage: 'something' }
  }
  
  render () {
    return (
      <div>
        <h1>TODO</h1>
        <Form/>
      </div>
    )
  }
}
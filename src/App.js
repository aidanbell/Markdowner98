import React, { Component } from 'react';
import './App.css';
import '98.css';

var md = require('markdown-it')();

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let r = md.render(this.state.input)
    this.setState({
      result: r
    })
  }

render() {
  return (
    <div className="App">
      <h1>Welcome To Markdown98</h1>
      <container>
        <div clasName="input">
          <form name="input" onSubmit={this.handleSubmit}>
            <textarea name="input" id="editor" value={this.state.input} onChange={this.handleChange} autoFocus></textarea>
            <button type="submit"></button>
          </form>
        </div>
        <div className="output">{this.state.result}</div>
      </container>
    </div>
  )};
}

export default App;

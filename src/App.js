import React, { Component } from 'react';
import './App.css';
import '98.css';

var newLine = require('markdown-it-preserve-newline');
var md = require('markdown-it')().use(newLine)

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
    let r = md.render(this.state.input)
    this.setState({
      [e.target.name]: e.target.value,
      result: md.render(this.state.input)
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
        <div className="input">
          <form name="input" onSubmit={this.handleSubmit}>
            <textarea name="input" id="editor" value={this.state.input} onChange={this.handleChange} autoFocus></textarea>
            <button type="submit"></button>
          </form>
        </div>
        <div className="output" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
      </container>
    </div>
  )};
}

export default App;

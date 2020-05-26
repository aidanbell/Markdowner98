import React, { Component } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import './App.css';
import '98.css';

var hljs = require('highlight.js')
var newLine = require('markdown-it-preserve-newline');
var md = require('markdown-it')({
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
}).use(newLine)

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange(e) {
    let r = md.render(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
      result: r
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let r = md.render(this.state.input)
    this.setState({
      result: r
    })
  }

  handleReset() {
    this.setState({
      input: '',
      result: ''
    })
  }

render() {
  return (
    <ScrollSync>
      <div className="App">
        <h3 id="welcome">Welcome to</h3>
        <h1 id="title">Markdown<span id="thin">98</span></h1>
        <p>
          A quick and easy Markdown Editor. To clear the input box entirely, click the 'close' icon
          on the window bar.
        </p>
        <container>
          <div className="input window">
            <div className="title-bar">
              <p className="title-bar-text">Write your boring, plain-text here</p>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={this.handleReset}></button>
              </div>
            </div>
            <ScrollSyncPane>
              <div className="inputText">
                <textarea name="input" id="editor" value={this.state.input} onChange={this.handleChange} autoFocus></textarea>
              </div>
            </ScrollSyncPane>
          </div>
          <div className="output window">
            <div className="title-bar">
              <p className="title-bar-text">Get your sweet, sweet, Markdown here:</p>
            </div>
            <ScrollSyncPane>
              <div className="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
            </ScrollSyncPane>
          </div>
        </container>
        <footer></footer>
      </div>
    </ScrollSync>
  )};
}

export default App;

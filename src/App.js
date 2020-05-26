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
        <h1>Welcome To Markdown98</h1>
        <container>
          <div className="input">
            <div className="title-bar">
              <p className="title-bar-text">Write your boring, plain-text here</p>
              <button aria-label="Close" onClick={this.handleReset}></button>
            </div>
            <ScrollSyncPane>
              <textarea name="input" id="editor" value={this.state.input} onChange={this.handleChange} autoFocus></textarea>
            </ScrollSyncPane>
          </div>
          <div className="output">
            <div className="title-bar">
              <p className="title-bar-text">Get your sweet, sweet, Markdown here:</p>
            </div>
            <ScrollSyncPane>
              <div className="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
            </ScrollSyncPane>
          </div>
        </container>
      </div>
    </ScrollSync>
  )};
}

export default App;

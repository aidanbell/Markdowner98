import React, { Component } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import '98.css';
import './App.css';

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
      result: '',
      min: false,
      menu: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleChange(e) {
    let r = md.render(e.target.value)
    this.setState({
      [e.target.name]: e.target.value,
      result: r
    })
  }

  handleReset() {
    this.setState({
      input: '',
      result: ''
    })
  }

  handleMinimize() {
    if (this.state.min) {
      this.setState({
        min: false
      })
    } else {
      this.setState({
        min: true
      })
    }
  }

  handleMenu() {
    if (this.state.menu) {
      this.setState({
        menu: false
      })
    } else {
      this.setState({
        menu: true
      })
    }
  }

render() {
  let menuEl =
  `<div className='menu window'>
    <h4>Start</h4>
    <hr></hr>
    <p>
      Thanks for visiting! This markdown editor was coded by Aidan Bell; Full-Stack
      Developer, Javascript Wizard, and Real Fun Guy. Take a peek into what I\'ve been
      working on:
    </p>
    <ul>
      <li>Github</li>
      <li>LinkedIn</li>
      <li>Personal Site</li>
    </ul>
  </div>`

  return (
      <div className="App">
        <h3 id="welcome">Welcome to</h3>
        <h1 id="title">Markdown<span id="thin">98</span></h1>
        <p>
          A quick and easy Markdown Editor. To clear the input box entirely, click the 'close' icon
          on the window bar.
        </p>
        <ScrollSync>
        <container>
          <div className="input window" style={{display: this.state.min ? "none" : "block"}}>
            <div className="title-bar">
              <p className="title-bar-text">Write your boring, plain-text here</p>
              <div className="title-bar-controls">
                <button aria-label="Minimize" onClick={this.handleMinimize}></button>
                <button aria-label="Close" onClick={this.handleReset}></button>
              </div>
            </div>
              <div className="inputText">
                <ScrollSyncPane>
                  <textarea name="input" id="editor" value={this.state.input} onChange={this.handleChange} autoFocus></textarea>
                </ScrollSyncPane>
              </div>
          </div>
          <div className="output window" style={{margin: this.state.min ? "auto" : "auto"}}>
            <div className="title-bar">
              <p className="title-bar-text">Get your sweet, sweet, Markdown here:</p>
            </div>
            <ScrollSyncPane>
              <div className="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
            </ScrollSyncPane>
          </div>
        </container>
      </ScrollSync>
        <footer>
          <button id="more" onClick={this.handleMenu}>More</button>
          {this.state.min ?
            <button id="inputMin" onClick={this.handleMinimize}>Input Box</button>
            :
            ''
          }
        </footer>
        <div className='menu window' style={{display: this.state.menu ? "block" : "none"}}>
          <h4>Start</h4>
          <hr></hr>
          <p>
            Thanks for visiting! This markdown editor was coded by Aidan Bell; Full-Stack
            Developer, Javascript Wizard, and Real Fun guy. Have a peek into what I've been
            working on:
          </p>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Personal Site</li>
          </ul>
        </div>
      </div>
  )};
}

export default App;

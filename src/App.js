import React, { Component } from 'react';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

import '98.css';
import './App.css';

var html2pdf = require('html2pdf.js')
var newLine = require('markdown-it-preserve-newline');
var md = require('markdown-it')({
  typographer: true,
}).use(newLine)

let demo = "# h1 Heading 8-)\r\n## h2 Heading\r\n### h3 Heading\r\n#### h4 Heading\r\n##### h5 Heading\r\n###### h6 Heading\r\n\r\n\r\n## Horizontal Rules\r\n\r\n___\r\n\r\n---\r\n\r\n***\r\n\r\n\r\n## Typographic replacements\r\n\r\nEnable typographer option to see result.\r\n\r\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\r\n\r\ntest.. test... test..... test?..... test!....\r\n\r\n!!!!!! ???? ,,  -- ---\r\n\r\n\"Smartypants, double quotes\" and \'single quotes\'\r\n\r\n\r\n## Emphasis\r\n\r\n**This is bold text**\r\n\r\n__This is bold text__\r\n\r\n*This is italic text*\r\n\r\n_This is italic text_\r\n\r\n~~Strikethrough~~\r\n\r\n\r\n## Blockquotes\r\n\r\n\r\n> Blockquotes can also be nested...\r\n>> ...by using additional greater-than signs right next to each other...\r\n> > > ...or with spaces between arrows.\r\n\r\n\r\n## Lists\r\n\r\nUnordered\r\n\r\n+ Create a list by starting a line with `+`, `-`, or `*`\r\n+ Sub-lists are made by indenting 2 spaces:\r\n  - Marker character change forces new list start:\r\n    * Ac tristique libero volutpat at\r\n    + Facilisis in pretium nisl aliquet\r\n    - Nulla volutpat aliquam velit\r\n+ Very easy!\r\n\r\nOrdered\r\n\r\n1. Lorem ipsum dolor sit amet\r\n2. Consectetur adipiscing elit\r\n3. Integer molestie lorem at massa\r\n\r\n\r\n1. You can use sequential numbers...\r\n1. ...or keep all the numbers as `1.`\r\n\r\nStart numbering with offset:\r\n\r\n57. foo\r\n1. bar\r\n\r\n\r\n## Code\r\n\r\nInline `code`\r\n\r\nIndented code\r\n\r\n    \/\/ Some comments\r\n    line 1 of code\r\n    line 2 of code\r\n    line 3 of code\r\n\r\n\r\nBlock code \"fences\"\r\n\r\n```\r\nSample text here...\r\n```\r\n\r\nSyntax highlighting\r\n\r\n``` js\r\nvar foo = function (bar) {\r\n  return bar++;\r\n};\r\n\r\nconsole.log(foo(5));\r\n```\r\n\r\n## Tables\r\n\r\n| Option | Description |\r\n| ------ | ----------- |\r\n| data   | path to data files to supply the data that will be passed into templates. |\r\n| engine | engine to be used for processing templates. Handlebars is the default. |\r\n| ext    | extension to be used for dest files. |\r\n\r\nRight aligned columns\r\n\r\n| Option | Description |\r\n| ------:| -----------:|\r\n| data   | path to data files to supply the data that will be passed into templates. |\r\n| engine | engine to be used for processing templates. Handlebars is the default. |\r\n| ext    | extension to be used for dest files. |\r\n\r\n\r\n## Links\r\n\r\n[link text](http:\/\/dev.nodeca.com)\r\n\r\n[link with title](http:\/\/nodeca.github.io\/pica\/demo\/ \"title text!\")\r\n\r\nAutoconverted link https:\/\/github.com\/nodeca\/pica (enable linkify to see)\r\n\r\n\r\n## Images\r\n\r\n![Minion](https:\/\/octodex.github.com\/images\/minion.png)\r\n![Stormtroopocat](https:\/\/octodex.github.com\/images\/stormtroopocat.jpg \"The Stormtroopocat\")\r\n\r\nLike links, Images also have a footnote style syntax\r\n\r\n![Alt text][id]\r\n\r\nWith a reference later in the document defining the URL location:\r\n\r\n[id]: https:\/\/octodex.github.com\/images\/dojocat.jpg  \"The Dojocat\"\r\n\r\n\r\n## Plugins\r\n\r\nThe killer feature of `markdown-it` is very effective support of\r\n[syntax plugins](https:\/\/www.npmjs.org\/browse\/keyword\/markdown-it-plugin).\r\n\r\n\r\n### [Emojies](https:\/\/github.com\/markdown-it\/markdown-it-emoji)\r\n\r\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\r\n>\r\n> Shortcuts (emoticons): :-) :-( 8-) ;)\r\n\r\nsee [how to change output](https:\/\/github.com\/markdown-it\/markdown-it-emoji#change-output) with twemoji.\r\n\r\n\r\n### [Subscript](https:\/\/github.com\/markdown-it\/markdown-it-sub) \/ [Superscript](https:\/\/github.com\/markdown-it\/markdown-it-sup)\r\n\r\n- 19^th^\r\n- H~2~O\r\n\r\n\r\n### [\\<ins>](https:\/\/github.com\/markdown-it\/markdown-it-ins)\r\n\r\n++Inserted text++\r\n\r\n\r\n### [\\<mark>](https:\/\/github.com\/markdown-it\/markdown-it-mark)\r\n\r\n==Marked text==\r\n\r\n\r\n### [Footnotes](https:\/\/github.com\/markdown-it\/markdown-it-footnote)\r\n\r\nFootnote 1 link[^first].\r\n\r\nFootnote 2 link[^second].\r\n\r\nInline footnote^[Text of inline footnote] definition.\r\n\r\nDuplicated footnote reference[^second].\r\n\r\n[^first]: Footnote **can have markup**\r\n\r\n    and multiple paragraphs.\r\n\r\n[^second]: Footnote text.\r\n\r\n\r\n### [Definition lists](https:\/\/github.com\/markdown-it\/markdown-it-deflist)\r\n\r\nTerm 1\r\n\r\n:   Definition 1\r\nwith lazy continuation.\r\n\r\nTerm 2 with *inline markup*\r\n\r\n:   Definition 2\r\n\r\n        { some code, part of Definition 2 }\r\n\r\n    Third paragraph of definition 2.\r\n\r\n_Compact style:_\r\n\r\nTerm 1\r\n  ~ Definition 1\r\n\r\nTerm 2\r\n  ~ Definition 2a\r\n  ~ Definition 2b\r\n\r\n\r\n### [Abbreviations](https:\/\/github.com\/markdown-it\/markdown-it-abbr)\r\n\r\nThis is HTML abbreviation example.\r\n\r\nIt converts \"HTML\", but keep intact partial entries like \"xxxHTMLyyy\" and so on.\r\n\r\n*[HTML]: Hyper Text Markup Language\r\n\r\n### [Custom containers](https:\/\/github.com\/markdown-it\/markdown-it-container)\r\n\r\n::: warning\r\n*here be dragons*\r\n:::\r\n"

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: demo,
      result: md.render(demo),
      min: false,
      menu: false,
      modal: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMinimize = this.handleMinimize.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handlePDF = this.handlePDF.bind(this);
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

  handlePDF(e) {
    html2pdf(this.state.result)
  }

render() {
  return (
      <div className="App">
        <h3 id="welcome">Welcome to</h3>
        <h1 id="title">Markdown<span id="thin">98</span></h1>
        <p id="blurb">
          A quick and easy Markdown Editor. To clear the input box entirely, click the 'X' icon
          on the window bar. Want to just view your glorious, new Markdown? Try clicking on the
          minimize button. If you want to take your beautiful new Markdown with you, click the Restore
          button in the output to download it as a PDF.
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
              <div className="title-bar-controls">
                <button aria-label="Restore" id="openPDF" onClick={this.handlePDF}></button>
              </div>
            </div>
            <ScrollSyncPane>
              <div className="result" dangerouslySetInnerHTML={{__html: this.state.result}}></div>
            </ScrollSyncPane>
          </div>
        </container>
      </ScrollSync>
        <footer>
          <img id="more" onClick={this.handleMenu} src="https://cdn.vox-cdn.com/thumbor/sVV5FY43ITVX6M5r61MBrnnQSdI=/cdn.vox-cdn.com/uploads/chorus_asset/file/6028879/win95s.0.gif"></img>
          {this.state.min ?
            <button id="inputMin" onClick={this.handleMinimize}>Input Box</button>
            :
            ''
          }
        </footer>
        <div className='menu window' style={{display: this.state.menu ? "block" : "none"}}>
          <h4>About:</h4>
          <hr></hr>
          <p>
            Thanks for visiting! This markdown editor was coded by Aidan Bell; Full-Stack
            Developer, Javascript Wizard, and Real Fun guy. Have a peek into what I've been
            working on:
          </p>
          <ul id="links">
            <a href="https://github.com/aidanbell"><li>Github</li></a>
            <a href="https://www.linkedin.com/in/aidanbell0/"><li>LinkedIn</li></a>
            <a href="https://aidanb.io/"><li>Personal Site</li></a>
          </ul>
          <hr></hr>
          <h4>Coming Soon</h4>
          <hr></hr>
          <ul id="icebox">
            <li>Confirmation on PDF Download with option to name the file</li>
            <li>Animation to show the Input section minimizing</li>
            <li>Some more styling options</li>
            <li>A cheesey Windows 98-like logo</li>
          </ul>
          <hr></hr>
          <h4>Special Thanks</h4>
          <a href="https://jdan.github.io/98.css/">98.css</a><br></br>
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="">Favicon by Pixel Perfect</a>
        </div>
      <div className="PDFModal window" style={{display: this.state.modal ? "none" : "block"}}>

      </div>
    </div>
  )};
}

export default App;

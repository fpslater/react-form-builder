import React, { Component } from 'react';

import Input from './components/Input';

import './App.css';



// {
//  type: 'text',
//  value: '',
//  children: [
//    nissan {
//      type: 'text',
//      value: '',
//      children: []
//    }
//
//  ]
//
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
    this.addInput = this.addInput.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
  }

  addInput() {
    // debugger
    const form = this.state.form;
    const formIndex = Object.keys(form).length;

    form[formIndex] = {
      condition: null,
      type: 'text',
      value: '',
      children: {}
    };

    console.log(JSON.stringify(form));

    this.setState({form: form});
  }

  addSubInput(data) {
    const form = this.state.form[data.id];
    const childIndex = Object.keys(form.children).length;

    form.children[childIndex] = {
      condition: null,
      type: 'text',
      value: '',
      children: {}
    };

    // debugger

    this.setState({form: form});
  }

  render() {
    const form = this.state.form;
    
    debugger
    
    //
    // let children = null
    // if(this.props.replies){
    //   replies = this.props.replies.map((reply) => {
    //     return (
    //       <Comment author={reply.author} body={reply.body} />
    //     )
    //   })
    // }
    //
    
    

    //
    // render() {
    //   return (
    //     <div className="comment">
    //       <div className="replies">{ replies }</div>
    //     </div>
    //   )
    // }

    return (
      <div className="App">
        {Object.keys(form).map((key) => {
          var input = this.state.form[key];
          return (
            <Input
              key={key}
              id={key}
              input={input}
              addSubInput={this.addSubInput}
            />
          )
        }
        )}
        <button onClick={this.addInput}>Add Input</button>
      </div>
    );
  }
}

export default App;

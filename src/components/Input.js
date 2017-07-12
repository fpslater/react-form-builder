import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Inputs from './Inputs';

const conditionOptions = [
  { value: 'equals', label: 'Equals' },
  { value: 'greater', label: 'Greater than' },
  { value: 'less', label: 'Less than' }
];

const typeOptions = [
  { value: 'text', label: 'text' },
  { value: 'number', label: 'number' },
  { value: 'boolean', label: 'Yes/No' }
]

class Input extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      type: '',
      condition: {
        type: '',
        value: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
  }

  onChange(elm) {
    // this.setState({type: elm.value});
  }

  onTypeChange(elm) {
    this.setState({type: elm.value});
  }

  onQuestionChange(event) {
    this.setState({question: event.target.value});
  }

  addSubInput() {
    // console.log("SDSDSD");
    // debugger
    this.props.addSubInput({
      id: this.props.id,
      question: this.state.question,
      type: this.state.type,
      condition: this.state.condition
    });
  }

  render() {
    const children = this.props.form.children;

    return (  
      <div className='sub-input'>
        <form>
          {this.props.condition &&
          <div className='condition'>
            <label>Condition
              <Select
                name="form-field-condition-type"
                value="one"
                options={conditionOptions}
                onChange={this.onChange}
              />
              <Select
                name="form-field-condition-boolean"
                value="one"
                options={conditionOptions}
                onChange={this.onChange}
              />
            </label>
          </div>
          }
          <div className='question'>
            <label>Question
              <input
                placeholder=""
                type="text"
                value={this.state.question}
                onChange={this.onQuestionChange}
              />
            </label>
          </div>
          <div className='type'>
            <label>Type
              <Select
                name="form-field-type"
                value="one"
                options={conditionOptions}
                onChange={this.onTypeChange}
              />
            </label>
          </div>
          <div className='buttons'>
            <button onClick={this.addSubInput}>Add Sub-Input</button>
            <button>Delete</button>
          </div>
        </form>
         <Inputs inputs={children} />
      </div>
    )
  }
}

export default Input;
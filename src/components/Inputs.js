import React from 'react';
import Input from './Input'

const Inputs = (props) => (
  <div>
    {Object.keys(props.inputs).map((key) => {
     return <Input
        key={props.inputs[key].id}
        input={props.inputs[key]} 
      /> 
    })}
  </div>
);

export default Inputs;

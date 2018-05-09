import React, { Component } from 'react';
import Inputmask from 'inputmask';
import styled from 'styled-components';
//https://github.com/insin/react-maskedinput Input
//https://yarnpkg.com/en/package/calidation#readme
// https://github.com/sanniassin/react-input-mask
import Label from '../Label';
export class Input extends Component {
  
  componentDidMount() {
    const { mask } = this.props;
    console.log('maaask', mask);
    console.log('inputmask', Inputmask(mask));
    //Inputmask(mask).mask(this._input)
    Inputmask(mask);
  }

  render() {
    const { label, onChange, mask, id, value, className } = this.props;
    console.log('value', value);
    return (
      <div>
        <Label>{label}</Label>
        <InputText 
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          mask={mask}
          //ref={(c) => (this._input = c)}
          className={className}
        />
      </div>
    );
  }
}

const InputText = styled.input`
  width: 100%;
  float:left;
  height: 1.2rem;
  border: 0.1rem solid #000;
  background-color: #fff;
`;

export default Input;
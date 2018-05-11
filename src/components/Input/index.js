import React, { Component } from 'react';
import Inputmask from 'inputmask';
import MaskedInput from 'react-maskedinput'
import styled from 'styled-components';
//https://github.com/insin/react-maskedinput Input
//https://yarnpkg.com/en/package/calidation#readme
// https://github.com/sanniassin/react-input-mask
import Label from '../Label';
export class Input extends Component {
  
  componentDidMount() {
    const { mask } = this.props;
    //console.log('inputmask', Inputmask(mask));
    //Inputmask({"mask": mask}).mask(this._input)
    // Inputmask(mask);
  }

  render() {
    const { label, onChange, mask, value, className, name } = this.props;
    console.log('className', className);
    console.log('mask', mask);
    return (
      <div className={className}>
        <Label>{label}</Label>
        <InputText 
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          mask={mask}
          // ref={(c) => (this._input = c)}
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
  &:focus {
    bordeR: 0.1rem solid #00d0d7;
  }
`;

export default Input;
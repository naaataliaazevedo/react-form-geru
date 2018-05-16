import React, { Component } from 'react';
import MaskedInput from 'react-maskedinput'
import styled from 'styled-components';
import Label from '../Label';
export class Input extends Component {
  render() {
    const { label, onChange, mask, name, className } = this.props;
    console.log('className', className);
    return (
      <ContainerInput className={className === true ? 'invalid' : 'aaaaa'}>
        <Label>{label}</Label>
        <MaskedInput
          type="text"
          mask={mask}
          name={name}
          onChange={onChange}
        />
      </ContainerInput>
    );
  }
}

const ContainerInput = styled.div`
  &.invalid {
    label {
      color: red;
    }
    input {
      border: 0.1rem solid red;
      &:focus {
        border: 0.1rem solid red;
        outline: none;
      }
    }
  }
  > input {
    background-color: #fefff0;
    border: 0.1rem solid #000; 
    width: 100%;
    height: 1.2rem;
    float:left; 
    font-weight: bold;
    &:focus {
      border: 0.1rem solid #00d0d7;
      outline: none;
    }
  }
`;

export default Input;
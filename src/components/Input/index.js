import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../Label';
export class Input extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <Label>{label}</Label>
        <InputText type="text" />
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
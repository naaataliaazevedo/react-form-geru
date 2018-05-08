import React, { Component } from 'react';
import styled from 'styled-components';

export class Input extends Component {
  render() {
    return (
      <InputText type="text" />
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
import React, { Component } from 'react';
import styled from 'styled-components';

export class Button extends Component {
  render() {
    const { disabled } = this.props;
    console.log('disabled', disabled);
    return (
      <BtnSubmit type="submit" disabled={disabled}>{this.props.children}</BtnSubmit>
    );
  }
}

const BtnSubmit = styled.button`
  display: block;
  width: 12rem;
  height: 1.6rem;
  margin: 0 auto;
  background-color: green;
  &:disabled {
    background-color: #c1c4b8;
    border: transparent;
  }
`;

export default Button;